<template>
  <div>
    <div id="map"></div>
    <div class="container">
        <section v-if="errored">
          <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
          <div v-if="loading">Loading...</div>
          <div class="filter-checkboxes">
            <h4 class="filter-label">Filter by</h4>
            <label class="filter-checkbox">antiques<input type="checkbox" value="antiques" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"> <span class="checkmark"></span></label>
            <label class="filter-checkbox">baby items<input type="checkbox" value="baby items" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">clothing<input type="checkbox" value="clothing" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">furniture<input type="checkbox" value="furniture" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">toys/games<input type="checkbox" value="toys/games" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">jewelry<input type="checkbox" value="jewelry" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">kitchen items<input type="checkbox" value="kitchen items" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">sporting goods<input type="checkbox" value="sporting goods" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <label class="filter-checkbox">tools<input type="checkbox" value="tools" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"><span class="checkmark"></span></label>
            <p @click="clearFilters()">X clear filters</p>
          </div>
          <table class="sellers-table">
            <thead width="400px">
              <tr>
                <th scope="col" @click="sort('address')">
                  Street Name
                  <i
                    v-if="currentSort === 'address'"
                    v-bind:class="[currentSortDir === 'asc' ? 'fas fa-chevron-down': 'fas fa-chevron-down active']"
                    class="float-right"
                  ></i>
                </th>
                <th scope="col" @click="sort('ward')">
                  Ward
                  <i
                    v-if="currentSort === 'ward'"
                    i
                    v-bind:class="[currentSortDir === 'asc' ? 'fas fa-chevron-down': 'fas fa-chevron-down active']"
                    class="float-right"
                  ></i>
                </th>
                <th scope="col">Items for Sale</th>
              </tr>
            </thead>
            <tbody v-if="sellerList">
              <tr class="list-complete-item" v-for="(seller, index) in (sortedActivity, filteredList)" :key="index">
                <td class="address">{{seller.address.streetNumber}} {{seller.address.streetName}}</td>
                <td class="ward">{{seller.ward}}</td>
                <td class="itemsList">{{seller.itemsList}}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
</template>
<script>
import axios from "axios";
import { lookUpWard, wardListings } from "@/wardListings";

export default {
  data() {
    return {
      sellerList: [],
      loading: true,
      errored: false,
      currentSort: "address",
      currentSortDir: "asc",
      pageSize: 10,
      currentPage: 1,
      search: ['antiques', 'baby items', 'clothing', 'furniture', 'toys/games', 'jewelry', 'kitchen items', 'sporting goods', 'tools'],
      checkedCategories: []
    };
  },

  mounted() {
    this.$map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(42.458427, -71.066162),
      zoom: 15,
      // styles: [{"stylers": [{ "saturation": -100 }]}]
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
      .finally(() => this.placeMarkers());
  },

  methods: {
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
    },

    nextPage: function() {
      if (this.currentPage * this.pageSize < this.sellerList.length)
        this.currentPage++;
    },

    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    },

    placeMarkers: function() {
      let i;
      this.$markers = [];

      for (i = 0; i < this.sellerList.length; i++) {
        let lat = Number(this.sellerList[i].latLng.split(",")[0]);
        let lng = Number(this.sellerList[i].latLng.split(",")[1]);
        const info = `<div class="info-address">${this.sellerList[i].address.streetNumber} ${this.sellerList[i].address.streetName}</div>
                      <div class="info-items-list"></br>${this.sellerList[i].itemsList}</div>`;

        let marker = new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map: this.$map,
          // icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|A00105',
          itemsList: this.sellerList[i].itemsList
        });

        const infowindow = new google.maps.InfoWindow({
          content: info,
          maxWidth: 300
        });

        marker.addListener("click", function() {
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

    sort: function(sortBy) {
      if (sortBy === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = sortBy;
    },
    
    filterByTypeCheckbox: function() {
        this.search = this.checkedCategories;
        if (this.checkedCategories.length === 0) this.clearFilters();
    },

    clearFilters: function() {
      this.search = ['antiques', 'baby items', 'clothing', 'furniture', 'toys/games', 'jewelry', 'kitchen items', 'sporting goods', 'tools'];
      this.checkedCategories = [];
    },
    // used by computed filter property 
    filterCategoriesExclusive: function(seller) {
      let isFound;
      // finds sellers that have ALL of the search categories
      for (let i = 0; i < this.search.length; i++) {
        if (isFound === false) {
          return;
        } else if (seller.itemsList.includes(this.search[i])) {
          isFound = true;
        } else {
          isFound = false;
        }
      }
      return isFound;
    },
    // used by computed filter property 
    filterCategoriesInclusive: function(seller) {
      let isFound;
      // finds sellers that have ANY of the search categories
      for (let i = 0; i < this.search.length; i++) {
        if (isFound === true) {
          isFound = true;
        } else if (seller.itemsList.includes(this.search[i])) {
          isFound = true;
        } else {
          isFound = false;
        }
      }
      return isFound;
    },
    // filter markers
    filterMarkers: function() {
      if (this.checkedCategories.length === 0) {
        for (let i = 0; i < this.$markers.length; i++) {        
          if (this.filterCategoriesInclusive(this.$markers[i])) {
            this.$markers[i].setMap(this.$map);
          } else {
            this.$markers[i].setMap(null);
          }
        }
      } else {
        for (let i = 0; i < this.$markers.length; i++) {        
          if (this.filterCategoriesExclusive(this.$markers[i])) {
            this.$markers[i].setMap(this.$map);
          } else {
            this.$markers[i].setMap(null);
          }
        }
      }
    }
  },

  computed: {
    totalNumPages() {
      return Math.ceil(this.sellerList.length / this.pageSize);
    },

    sortedActivity() {
      let modifier = 1;
      if (this.currentSortDir === "desc") modifier = -1;

      if (this.currentSort === 'address') {
        return this.sellerList.sort((a, b) => {
        // streetNames in alphabetical order
        if (a.address.streetName > b.address.streetName) return 1 * modifier;
        if (a.address.streetName < b.address.streetName) return -1 * modifier;
        // then streetNumbers in order
        if (parseInt(a.address.streetNumber) > parseInt(b.address.streetNumber)) return 1 * modifier;
        if (parseInt(a.address.streetNumber) < parseInt(b.address.streetNumber)) return -1 * modifier;
        });
      } else if (this.currentSort === 'ward') {
        return this.sellerList.sort((a, b) => {
          if (a.ward < b.ward) return -1 * modifier;
          if (a.ward > b.ward) return 1 * modifier;
          return 0;
        });
      }
    },

    filteredList() {
      if (this.currentSortDir === "desc") {
        this.currentSortDir === "asc";
      }


      if (this.checkedCategories.length === 0) {
        return this.sellerList.filter(seller => {
          let itemsList = this.filterCategoriesInclusive(seller);
          return itemsList;
        });
      } else {
          return this.sellerList.filter(seller => {
            let itemsList = this.filterCategoriesExclusive(seller);
            return itemsList;
        });
      }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}


#map {
  width: 100%;
  height: 60vh;
  background-color: #cccccc;
  border-top: 2px solid #cccccc;
  border-bottom: 2px solid #cccccc;
  margin-bottom: 40px;
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

.filter-checkboxes {
  background-color: #f3f3f3;
  padding: 14px 20px;
  display: inline-block;
  width: auto;
  margin-top: 10px;
}
  
/* Customize the label (the container) */
.filter-checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  /* When the checkbox is checked, add a background */
  input:checked ~ .checkmark {
    background-color: #A00105;
  }
  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ffffff;
  }
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
}

.sellers-table {
  color: #545454;
  border-spacing: 10px;
  font-family: avenir;
  font-size: 16px;
  margin: 0 auto 100px;
  width: 80%;
  float: right;

  th {
    padding: 12px 10px;
    background-color: #f3f3f3;
  }

  td {
    padding: 12px 10px;
    border-bottom: 1px solid #cccccc;

    &.address {
      width: 200px;
    }
    &.ward {
      width: 100px;
    }
  }
}

.info-address {
  font-size: 20px;
}

.fa-chevron-down, .fa-chevron-up {
  float: right;
  color: #A00105;
  font-size: 18px;
  transition: .1s;
}

.fa-chevron-down.active {
  transform: rotate(-180deg);
  transition: .1s;
}

.filter-label {
  padding-bottom: 15px;
}

</style>
