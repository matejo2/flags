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
    props: {
      country: {
        type: String,
        default: 'de',
        validator: function(value) {
          console.log(value.length==2);
          return value.length==2;
        }
      }
    },
    computed: {
      css: function(){
        return 'flag flag-' + this.country;
      }
    }
})

var app = new Vue({
  el: '#app',
  data: {
    country: 'ro'
  }
})