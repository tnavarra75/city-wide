import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

$(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {
        $('.to-top').addClass('to-top-active');
    } else {
        $('.to-top').removeClass('to-top-active');
    }
});

// SMOOTH SCROLL 
$('#to-top').on('click', function(e) {
    let target = $(this).attr('href');
    e.preventDefault();

    $('html, body').stop(true).animate({
        scrollTop: $(target).offset().top
    }, 1000, 'swing');

    return false;
});