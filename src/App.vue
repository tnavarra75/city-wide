<template>
  <div id="app">
    <div id="top"></div>
    <YardSale/>
    <a id="to-top" class="to-top" v-scroll-to="{ el: '#top', duration: 1000, easing: 'ease-out'}"><i class="fas fa-arrow-circle-up"></i></a>
  </div>
</template>

<script>
import YardSale from './components/YardSale.vue'

export default {
  name: 'app',
  components: {
    YardSale
  },

  mounted() {
    //TO TOP BUTTON SHOW ON SCROLL
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        if (window.pageYOffset >= 500) {
          document.getElementById('to-top').classList.add('to-top-active');
        }
        else {
          document.getElementById('to-top').classList.remove('to-top-active');
        }
      });
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  }
</style>

<style lang="scss" >
    .to-top {
        opacity: 0;
        color: #A00105;
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-size: 30px;
        transition: .2s;
    }
    
    .to-top-active {
        opacity: 1;
        transition: .2s;
    }
</style>
