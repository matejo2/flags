class FlagIcon extends HTMLElement () {
    constructor(){
        super();
        this._ShadowRoot = this.attachShadow({
            mode : 'open'
        });
        this._ShadowRoot.innerHTML  = `
            <link href="assets/flags.css" rel=stylesheet type="type/css">
            <img id="flag-image" src="assets/blank.gif" class="flag" />
        `
    }
    updateFlag(country){
        this._img = this._ShadowRoot.querySelector("#flag-image")
        this._img.className = 'flag flag-' + country
    }
}