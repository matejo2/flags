Vue.config.ignoredElements = ["flag-icon"];

var countries = ["de", "gb", "kr", "us", "gr", "it", "fr", "es", "nl", "dn"];

function getRandomCountry(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Vue.component('vue-flag-icon', {
  template: `
    <div>
    <link href="./assets/flags.css" rel=stylesheet type="text/css">
    <img id="flag-image" src="./assets/blank.gif" v-bind:class="css" />
    </div> `,
    props: ['country'],
    data: function(){
        return {
          css: 'flag flag-' + this.country
        }
    }
})

var app = new Vue({
  el: '#app'
})