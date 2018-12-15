class FlagIcon extends HTMLElement () {
    constructor(){
        super();
        this._ShadowRoot = this.attachShadow({
            mode : 'open'
        });
        this._ShadowRoot.innerHTML  = `
            <link href="assets/flags.css" rel=stylesheet type="type/css">
        `
    }
}