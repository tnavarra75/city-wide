<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    sellerList: Array,
    filters: Array
  },

  mounted() {
    this.$map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(42.458427, -71.066162),
      zoom: 15
    });
  },

  watch: {
    filters: function() {
      if (this.filters.length === 0) {
        for (let i = 0; i < this.$markers.length; i++) {        
          this.$markers[i].setMap(this.$map);
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

  methods: {
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
}


</script>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>