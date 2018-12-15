

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

//mit npm install vue vermutlich einbinden