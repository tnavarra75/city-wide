<template>
  <div>
    <div class="top-bar"></div>
    <div class="container">
      <div class="main-info">
        <h1 class="headline">20XX Melrose City Wide Yard&nbsp;Sale</h1>
        <h2 class="subhead"> to Benefit Friends of the Milano Center</h2>
        <h3 class="date-time">Saturday, Sept. XX, 20XX, 9:00 am &ndash; 2:00 pm</h3>
      </div>
    </div>
    <div id="map"></div>
    <div>
      <section class="container filters-listings-container" v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section class="container filters-listings-container" v-else>
        <div class="filters-sort-container">
          <div class="filters-sort-inner">
            <select class="sort-dropDown" @change="sortDropDown">
              <option value="ward">Sort by: Ward</option>
              <option value="address">Sort by: Street Name</option>
            </select>
            <div class="filter-label" @click="showFilters()">
              <h4>Filters</h4>
              <i v-show="mobileFilter" class="material-icons">filter_list</i>
              <i v-show="!mobileFilter" class="material-icons">close</i>
            </div>
          </div>
          <div id="filters-container" class="filters-container">
            <label v-for="category in categories" :key="category" class="filter-checkbox">{{category}}<input type="checkbox" :value="category" v-model="checkedCategories" @change="filterByTypeCheckbox(); filterMarkers()"> <span class="checkmark"></span></label>
          </div>
          <div id="clear-filters" class="clear-filters">
            <p @click="clearFilters()">clear filters</p>
          </div>
        </div>
        <div class="listings-container">
          <div v-if="loading">Loading...</div>
          <div class="listings-tally">
            Showing {{ numResults }} listings in {{ filteredCategories }}
          </div>
          <div class="listing listing-heading">
            <div class="street-name" @click="sort('address')">
              Street Name
              <i v-if="currentSort === 'address'" v-bind:class="[currentSortDir === 'asc' ? 'fas fa-chevron-down': 'fas fa-chevron-down active']"></i>
            </div>
            <div class="ward" @click="sort('ward')">
              Ward
              <i v-if="currentSort === 'ward'" v-bind:class="[currentSortDir === 'asc' ? 'fas fa-chevron-down': 'fas fa-chevron-down active']"></i>
              </div>
            <div class="items-list">
              Items for sale
            </div>
          </div>
          <transition-group name="list" tag="div">
            <div class="listing" v-for="(seller) in (sortedActivity, filteredList)" :key="seller.id">
              <div class="street-name" v-if="sellerList">{{seller.address.streetNumber}} {{seller.address.streetName}} <a class="directions" target="blank" :href="`https://google.com/maps/dir/?api=1&destination=${seller.address.streetNumber}+${seller.address.streetName}+Melrose+MA+02176`"><i class="fas fa-location-arrow"></i></a></div>
              <div class="ward">{{seller.ward}}</div>
              <div class="items-list">{{seller.itemsList}}</div>
            </div>
          </transition-group>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { lookUpWard } from "@/wardListings";

export default {
  data() {
    return {
      mobileFilter: true,
      sellerList: [],
      loading: true,
      errored: false,
      currentSort: "ward",
      currentSortDir: "asc",
      pageSize: 10,
      currentPage: 1,
      categories: ['antiques', 'baby items', 'clothing', 'furniture', 'toys/games', 'jewelry', 'kitchen items', 'sporting goods', 'tools'],
      checkedCategories: [],
      search: ['antiques', 'baby items', 'clothing', 'furniture', 'toys/games', 'jewelry', 'kitchen items', 'sporting goods', 'tools']
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
    showFilters: function() {
      this.mobileFilter = !this.mobileFilter;
      if (this.mobileFilter === false) {
        document.getElementById('filters-container').classList.add('active');
        document.getElementById('clear-filters').classList.add('active');
      } else {
        document.getElementById('filters-container').classList.remove('active');
        document.getElementById('clear-filters').classList.remove('active');
      }
    },

    formatData: function(response) {
      const sellerList = [];

      for (let i = 0; i < response.data.feed.entry.length; i++) {
        const streetNumber = response.data.feed.entry[i].gsx$streetnumber.$t;
        const streetName = response.data.feed.entry[i].gsx$streetname.$t;
        const cityState = "Melrose MA";
        const ward = lookUpWard(streetName);
        const id = i;
        let itemsList = response.data.feed.entry[i].gsx$itemslist.$t;
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
            }
          })
          .sort()
          .join(", ");

        const latLng = response.data.feed.entry[i].gsx$latlng.$t;

        const createSeller = function(
          id,
          streetNumber,
          streetName,
          cityState,
          ward,
          itemsList,
          latLng
        ) {
          return {
            id,
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
          id,
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
        const info = `<div style="font-family: 'Open Sans', sans-serif; font-size: 15px;">
                      <div style="color: #A00105; font-weight: 600; padding-bottom: 3px;">${this.sellerList[i].address.streetNumber} ${this.sellerList[i].address.streetName}</div>
                      <div style="padding-bottom: 10px;">${this.sellerList[i].itemsList}</div>
                      <a style="color: #545454;" target="_blank" href="https://google.com/maps/dir/?api=1&destination=${this.sellerList[i].address.streetNumber}+${this.sellerList[i].address.streetName}+Melrose+MA+02176">get directions <i style="color: #A00105; font-size: 13px; padding-left: 5px;" class="fas fa-location-arrow"></i></a>
                      <div>`;

        let marker = new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          icon: {
            url: 'http://s3.amazonaws.com/mullen-misc-assets/tn-test/round-place.png', 
            scaledSize: new google.maps.Size(26, 36), // scaled size
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

    sortDropDown: function() {
      let sortBy = event.target.value;
      this.sort(sortBy);
    },
    
    filterByTypeCheckbox: function() {
        this.search = this.checkedCategories;
        if (this.checkedCategories.length === 0) this.clearFilters();
    },

    clearFilters: function() {
      this.search = ['antiques', 'baby items', 'clothing', 'furniture', 'toys/games', 'jewelry', 'kitchen items', 'sporting goods', 'tools'];
      this.checkedCategories = [];
      this.placeMarkers();
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
    numResults() {
      return this.filteredList.length;
    },

    filteredCategories() {
      return this.checkedCategories.length === 0 ? 'all categories' : this.checkedCategories.join(', ');
    },

    totalNumPages() {
      return Math.ceil(this.sellerList.length / this.pageSize);
    },

    sortedActivity() {
      let modifier = 1;
      let sortedList;
      const toSort = this.sellerList;

      if (this.currentSortDir === "desc") modifier = -1;

      if (this.currentSort === 'address') {
        sortedList = toSort.sort((a, b) => {
        // streetNames in alphabetical order
        if (a.address.streetName > b.address.streetName) return 1 * modifier;
        if (a.address.streetName < b.address.streetName) return -1 * modifier;
        // then streetNumbers in order
        if (parseInt(a.address.streetNumber) > parseInt(b.address.streetNumber)) return 1 * modifier;
        if (parseInt(a.address.streetNumber) < parseInt(b.address.streetNumber)) return -1 * modifier;
        });
      } else {
        sortedList = toSort.sort((a, b) => {
          if (a.ward < b.ward) return -1 * modifier;
          if (a.ward > b.ward) return 1 * modifier;
          return 0;
        });
      }
      return sortedList;
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
 @import '@/assets/styles/main.scss';
 
</style>
