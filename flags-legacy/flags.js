import log from './simpleLogger.js'

class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this._ShadowRoot = this.attachShadow({
      mode: "open"
    });
    this._ShadowRoot.innerHTML = `
            <link href="./assets/flags.css" rel=stylesheet type="text/css">
            <img id="flag-image" src="./assets/blank.gif" class="flag" />
        `;
  }

  static get observedAttributes() {
    return ["country"];
  }

  connectedCallback() {
    //lifecyle hookc
    this.updateFlag(this.getAttribute("country"));
  }

  attributeChangedCallback(name, oldValue, newValue) { //lifecyle callback
    log("old value: " + oldValue + " | new value: " + newValue);
    this.updateFlag(newValue);
  }

  updateFlag(country) {
    this._img = this._ShadowRoot.querySelector("#flag-image");
    this._img.className = "flag flag-" + country;
  }
}

customElements.define("flag-icon", FlagIcon);
//web components | immer wenn flag-icon verwendet wird soll FlagIcon Klasse verwendet werden
