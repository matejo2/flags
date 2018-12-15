Vue.config.ignoredElements = ["flag-icon"];

var countries = ["de", "gb", "kr", "us", "gr", "it", "fr", "es", "nl", "dn"];

function getRandomCountry(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var app = new Vue({
  el: "#app", //element im dom/html an den man sich verbinden will (ist die id)
  data: {
      country: 'de'
  },
  methods: {
    changeCountry: function(){
        this.country = countries[getRandomCountry(countries.length)];
    }
  },
  mounted(){
    console.log("mounted");
  },
  updated: function() {
    console.log("updated");
  },
});

app.$watch("country", function(newValue, oldValue) {
  console.log("watcher: new: " + newValue + " | old: " + oldValue);
});

app.$watch("country", (newValue, oldValue) =>
  console.log("one line watcher: new: " + newValue + " | old: " + oldValue)
);

//mit npm install vue vermutlich einbinden
