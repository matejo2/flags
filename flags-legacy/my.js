

var app = new Vue({
    el: '#app', //element im dom/html an den man sich verbinden will (ist die id)
    data: {
        country: 'gr',
    },
    mounted() {
        console.log('mounted');
    },
    updated(){
        console.log('updated')
    }
})

app.$watch('country', function(newValue, oldValue){
    console.log("watcher: new: " + newValue + " | old: " + oldValue)
})

app.$watch('country', (newValue, oldValue) => 
console.log("one line watcher: new: " + newValue + " | old: " + oldValue))

//mit npm install vue vermutlich einbinden