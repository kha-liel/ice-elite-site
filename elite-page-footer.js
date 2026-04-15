import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ElitePageFooter extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "elite_page_footer";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="wrapper"></div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ElitePageFooter.tag, ElitePageFooter);