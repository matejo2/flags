Vue.config.ignoredElements = ['flag-icon']

var app = new Vue({
  el: "#app", //element im dom/html an den man sich verbinden will (ist die id)
  data: {
    country: "gr"
  },
  mounted: function() {
    console.log("mounted");
  },
  updated: function() {
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
