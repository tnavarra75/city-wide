<template>
  <div class="filters-sort-container">
    <div class="filters-sort-inner">
      <select class="sort-dropDown" @change="updateSortDropDown()">
        <option value="ward">Sort by: Ward</option>
        <option value="address">Sort by: Street Name</option>
      </select>
      <div class="filter-label" @click="mobileFilter = !mobileFilter">
        <h4>Filters</h4>
        <i v-show="!mobileFilter" class="material-icons">filter_list</i>
        <i v-show="mobileFilter" class="material-icons">close</i>
      </div>
    </div>
    <div id="filters-container" class="filters-container" :class="{active: mobileFilter}">
      <label v-for="category in categories" :key="category" class="filter-checkbox">
        {{category}}
        <input
          type="checkbox"
          :value="category"
          v-model="checkedCategories"
          @change="updateCheckedCategories()"
        />
        <span class="checkmark"></span>
      </label>
    </div>
    <div id="clear-filters" class="clear-filters" :class="{active: mobileFilter}">
      <p @click="clearFilters()">clear filters</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltersMobileSort",

  props: {
    categories: Array,
    currentSort: String
  },

  data() {
    return {
      mobileFilter: false,
      checkedCategories: []
    }
  },

  methods: {
    updateSortDropDown: function() {
      let sortBy = event.target.value;
      this.$emit("updateSortDropDown", sortBy);
    },
    
    updateCheckedCategories: function() {
      this.$emit("updateFilters", this.checkedCategories);
    },

    clearFilters: function() {
      this.checkedCategories = [];
      this.$emit("clearFilters", this.checkedCategories);
    }
  }

};
</script>

<style lang="scss">
  @import "@/assets/styles/main.scss";
</style>