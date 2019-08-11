<template>
  <div>
    <div id="map"></div>
    <div class="container">
      <div>
        <ul class="filter-buttons">
          <li class="filter-button" @click="filterByType(''); filterMarkers();">all</li>
          <li class="filter-button" v-bind:class="classObject" @click="filterByType('antiques'); filterMarkers()" >antiques</li>
          <li class="filter-button" @click="filterByType('baby items'); filterMarkers()">baby items</li>
          <li class="filter-button" @click="filterByType('clothing'); filterMarkers()">clothing</li>
          <li class="filter-button" @click="filterByType('furniture'); filterMarkers()">furniture</li>
          <li class="filter-button" @click="filterByType('toys/games'); filterMarkers()">toys/games</li>
          <li class="filter-button" @click="filterByType('jewelry'); filterMarkers()">jewelry</li>
          <li class="filter-button" @click="filterByType('kitchen items'); filterMarkers()">kitchen items</li>
          <li class="filter-button" @click="filterByType('sporting goods'); filterMarkers()">sporting goods</li>
          <li class="filter-button" @click="filterByType('tools'); filterMarkers()">tools</li>
        </ul>
      </div>
      <!-- <div class="form-group">
        <input type="text" class="form-control" v-model="search" placeholder="Search" />
      </div> -->
      <div class="table-responsive">
        <section v-if="errored">
          <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
          <div v-if="loading">Loading...</div>

          <table class="table table-striped table-bordered" style="width:100%">
            <thead width="400px">
              <tr>
                <th scope="col" @click="sort('address')">
                  Street Name
                  <i
                    v-if="currentSort === 'address'"
                    v-bind:class="[currentSortDir === 'asc' ? 'fas fa-caret-down': 'fas fa-caret-up']"
                    class="float-right"
                  ></i>
                </th>
                <th scope="col" @click="sort('ward')">
                  Ward
                  <i
                    v-if="currentSort === 'ward'"
                    i
                    v-bind:class="[currentSortDir === 'asc' ? 'fas fa-caret-down': 'fas fa-caret-up']"
                    class="float-right"
                  ></i>
                </th>
                <th scope="col">Items for Sale</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-if="sellerList"
                v-for="(seller, index) in (sortedActivity, filteredList)"
                :key="index"
              >
                <td>{{seller.address.streetNumber}} {{seller.address.streetName}}</td>
                <td>{{seller.ward}}</td>
                <td>{{seller.itemsList}}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <button @click="prevPage" class="float-left btn btn-outline-info btn-sm">
        <i class="fas fa-arrow-left"></i>
        {{ currentPage }}
      </button>
      <button @click="nextPage" class="float-right btn btn-outline-info btn-sm">
        {{ currentPage + 1 }}
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {loadedGoogleMapsAPI} from '@/main'
import { lookUpWard, wardListings } from "@/wardListings";

export default {
  data() {
    return {
      sellerList: [],
      loading: true,
      errored: false,
      currentSort: "address",
      currentSortDir: "asc",
      search: '',
      searchSelection: "",
      pageSize: 10,
      currentPage: 1
    };
  },

  mounted() {
      this.$map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(42.458427, -71.066162),
        zoom: 15
      });

        // GET DATA FROM GOOGLE SHEET
    axios
      .get(
        "https://spreadsheets.google.com/feeds/list/1kwJ58AfcjcIyiyLrgS56Ar_jY7z0W_zTzIGFudkyq4E/od6/public/values?alt=json"
      )
      .then(response => {
        this.formatData(response);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.placeMarkers()));
  },

  methods: {
    placeMarkers: function() {
      let i;
      this.$markers = [];
      
      for (i = 0; i < this.sellerList.length; i++) {
        let lat = Number(this.sellerList[i].latLng.split(',')[0]);
        let lng = Number(this.sellerList[i].latLng.split(',')[1]);
        const info = `${this.sellerList[i].address.streetNumber} ${this.sellerList[i].address.streetName}</br>${this.sellerList[i].itemsList}`;

        let marker = new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map: this.$map,
          itemsList: this.sellerList[i].itemsList
        });

        const infowindow = new google.maps.InfoWindow({
          content: info,
          maxWidth: 300
        });

        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });

        this.$markers.push(marker);
      }
      
      const bounds = new google.maps.LatLngBounds();
        for (let i = 0; i < this.$markers.length; i++) {
          bounds.extend(this.$markers[i].getPosition());
      }
      
      this.$map.fitBounds(bounds);
    },

    filterMarkers: function() {
      let i;
      
      for (i = 0; i < this.$markers.length; i++) {
        if (this.$markers[i].itemsList.includes(this.search)) {
          this.$markers[i].setMap(this.$map);
        } else {
          this.$markers[i].setMap(null);
        }
      }
    },

    sort: function(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },

    filterByType: function(category) {
      this.search = category;
    },

    nextPage: function() {
      if (this.currentPage * this.pageSize < this.sellerList.length)
        this.currentPage++;
    },

    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    },

    formatData: function(response) {
      const sellerList = [];

      for (let i = 0; i < response.data.feed.entry.length; i++) {
        const streetNumber = response.data.feed.entry[i].gsx$streetnumber.$t;
        const streetName = response.data.feed.entry[i].gsx$streetname.$t;
        const cityState = "Melrose MA";
        const ward = lookUpWard(streetName);
        const itemsList = response.data.feed.entry[i].gsx$itemslist.$t;
        // replace TG with G and ALL with X to make maping easier
        itemsList = itemsList
          .replace("TG", "G")
          .replace("ALL", "X")
          .split("")
          .map(item => {
            if (item === "A") {
              return (item = "antiques");
            } else if (item === "B") {
              return (item = "baby items");
            } else if (item === "C") {
              return (item = "clothing");
            } else if (item === "F") {
              return (item = "furniture");
            } else if (item === "G") {
              return (item = "toys/games");
            } else if (item === "J") {
              return (item = "jewelry");
            } else if (item === "K") {
              return (item = "kitchen items");
            } else if (item === "S") {
              return (item = "sporting goods");
            } else if (item === "T") {
              return (item = "tools");
            } else if (item === "X") {
              return (item =
                "antiques, baby items, clothing, furniture, toys/games, jewelry, kitchen items, sporting goods, tools");
            } else {
              return (item = item);
            }
          })
          .sort()
          .join(", ");

        const latLng = response.data.feed.entry[i].gsx$latlng.$t;

        const createSeller = function(
          streetNumber,
          streetName,
          cityState,
          ward,
          itemsList,
          latLng
        ) {
          return {
            address: {
              streetNumber,
              streetName,
              cityState
            },
            ward,
            itemsList,
            latLng
          };
        };

        const newSeller = createSeller(
          streetNumber,
          streetName,
          cityState,
          ward,
          itemsList,
          latLng
        );

        sellerList.push(newSeller);
      }
      this.sellerList = sellerList;
      this.loading = false;
    }
  },

  computed: {
    classObject: function () {
      return {
        filterButtonActive: this.search.includes('antique')
      }
    },

    totalNumPages() {
      return Math.ceil(this.sellerList.length / this.pageSize);
    },

    sortedActivity() {
      return this.sellerList
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;

          if (this.currentSort === "address") {
            if (a.address.streetName < b.address.streetName)
              return -1 * modifier;
            if (a.address.streetName > b.address.streetName)
              return 1 * modifier;
            return 0;
          } else {
            if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
            return 0;
          }
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    },

    filteredList() {
      if (this.currentSortDir === "desc") {
        this.currentSortDir === "asc";
      }

      return this.sellerList
        .filter(seller => {
            let itemsList = seller.itemsList
            .toLowerCase()
            .includes(this.search.toLowerCase());
          return itemsList;
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 60vh;
  background-color: #cccccc;
}

.filter-buttons {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 20px 0;
  padding: 0;
}

.filter-button {
  /* display: block; */
  padding: 10px;
  border: 1px solid #ccc;
}

.filterButtonActive {
  background-color: #ccc;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
