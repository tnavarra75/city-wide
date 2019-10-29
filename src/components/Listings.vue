<template>
  <div class="listings-container">
    <div v-if="loading">Loading...</div>
    <div class="listings-tally">Showing {{ numResults }} listings in {{ filteredCategories }}</div>
    <div class="listing listing-heading">
      <div class="street-name" @click="updateSortBy('address')">
        Street Name
        <i
          v-if="currentSort=== 'address'"
          v-bind:class="[currentSortDir === 'asc' ? 'fas fa-chevron-down': 'fas fa-chevron-down active']"
        ></i>
      </div>
      <div class="ward" @click="updateSortBy('ward')">
        Ward
        <i
          v-if="currentSort === 'ward'"
          v-bind:class="[currentSortDir === 'asc' ? 'fas fa-chevron-down': 'fas fa-chevron-down active']"
        ></i>
      </div>
      <div class="items-list">Items for sale</div>
    </div>
    <transition-group name="list" tag="div">
      <div class="listing" v-for="(seller) in (sortedList, filteredList)" :key="seller.id">
        <div class="street-name">
          {{seller.address.streetNumber}} {{seller.address.streetName}}
          <a
            class="directions"
            target="blank"
            :href="`https://google.com/maps/dir/?api=1&destination=${seller.address.streetNumber}+${seller.address.streetName}+Melrose+MA+02176`"
          >
            <i class="fas fa-location-arrow"></i>
          </a>
        </div>
        <div class="ward">{{seller.ward}}</div>
        <div class="items-list">{{seller.itemsList}}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Listings",
  props: {
    sellerList: Array,
    currentSort: String,
    errored: Boolean,
    loading: Boolean,
    filters: Array
  },

  data() {
    return {
      currentSortDir: 'asc'
    }
  },

  computed: {
    numResults() {
      return this.filteredList.length;
    },

    filteredCategories() {
      return this.filters.length === 0 ? 'all categories' : this.filters.join(', ');
    },

    sortedList() {
      let modifier = 1;
      let sortedList;
      const toSort = this.sellerList;

      if (this.currentSortDir === "desc") modifier = -1;

      if (this.currentSort === "address") {
        sortedList = toSort.sort((a, b) => {
          // streetNames in alphabetical order
          if (a.address.streetName > b.address.streetName) return 1 * modifier;
          if (a.address.streetName < b.address.streetName) return -1 * modifier;
          // then streetNumbers in order
          if (
            parseInt(a.address.streetNumber) > parseInt(b.address.streetNumber)
          )
            return 1 * modifier;
          if (
            parseInt(a.address.streetNumber) < parseInt(b.address.streetNumber)
          )
            return -1 * modifier;
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
      this.currentSortDir === "desc" ? this.currentSortDir === "asc" : '';

      if (this.filters.length === 0) {
        return this.sortedList;
      } else {
          return this.sellerList.filter(seller => {
            let itemsList = this.filterCategoriesExclusive(seller);
            return itemsList;
        });
      }
    }
  },

  methods: {
    updateSortBy: function(sortBy) {
      if (sortBy === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      
      this.$emit("updateCurrentSort", sortBy);
    },

    filterCategoriesExclusive: function(seller) {
      let isFound;
      // finds sellers that have ALL of the search categories
      for (let i = 0; i < this.filters.length; i++) {
        if (isFound === false) {
          return;
        } else if (seller.itemsList.includes(this.filters[i])) {
          isFound = true;
        } else {
          isFound = false;
        }
      }
      return isFound;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>