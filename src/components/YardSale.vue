<template>
  <div>
    <Header />
    <Map 
      :sellerList ="sellerList"
      :filters="filters"
      ref="map"
    />
    <div>
      <section class="container filters-listings-container" v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section class="container filters-listings-container" v-else>
        <FiltersMobileSort
          :categories="categories"
          :currentSort="currentSort"
          v-on:updateFilters="updateFilters($event)" 
          v-on:updateSortDropDown="updateCurrentSort($event)"
          v-on:clearFilters="clearFilters($event)"
         />
        <Listings
          :sellerList="sellerList" 
          :currentSort="currentSort"
          :filters="filters"
          :errored="errored"
          :loading="loading"
          v-on:updateCurrentSort="updateCurrentSort($event)"
          />
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { lookUpWard } from "@/wardListings";
import Header from "../components/Header";
import Map from "../components/Map";
import Listings from "../components/Listings";
import FiltersMobileSort from "../components/FiltersMobileSort";

export default {
  data() {
    return {
      sellerList: [],
      loading: true,
      errored: false,
      currentSort: 'ward',
      currentSortDir: 'asc',
      categories: ['antiques', 'baby items', 'clothing', 'furniture', 'toys/games', 'jewelry', 'kitchen items', 'sporting goods', 'tools'],
      filters: []
    }
  },

  components: {
    Header,
    Map,
    Listings,
    FiltersMobileSort
  },

  mounted() {
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
      .finally(() => this.$refs.map.placeMarkers());
  },

  methods: {
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

    updateFilters: function(filters) {
      this.filters = filters;
    },

    clearFilters: function(filters) {
      this.filters = filters;
      this.$refs.map.placeMarkers();
    },

    updateCurrentSort: function(sortBy) {
      this.currentSort = sortBy;
    }
  }
};
</script>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>
