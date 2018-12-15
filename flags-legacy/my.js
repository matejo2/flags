Vue.config.ignoredElements = ["flag-icon"];

var countries = ["de", "gb", "kr", "us", "gr", "it", "fr", "es", "nl", "dn"];

function getRandomCountry(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var app = new Vue({
  el: "#app", //element im dom/html an den man sich verbinden will (ist die id)
  //  data: {
  //    country: "gr"
  //  },
  computed: {
    country: function() {
      return countries[getRandomCountry(countries.length)];
    }
  },
  mounted(){
      //this.country = 'us'
    console.log("mounted" + this.country);
  },
  updated: function() {
      //this.country
    console.log("updated");
  },
  watch: {}
});

app.$watch("country", function(newValue, oldValue) {
  console.log("watcher: new: " + newValue + " | old: " + oldValue);
});

app.$watch("country", (newValue, oldValue) =>
  console.log("one line watcher: new: " + newValue + " | old: " + oldValue)
);

//mit npm install vue vermutlich einbinden
