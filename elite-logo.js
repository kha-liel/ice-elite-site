import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteLogo extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "elite_logo";
  }

  constructor() {
    super();
    this.size = "medium"; // default size
    this.loading = "lazy";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      size: { type: String, reflect: true },
      loading: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
        :host {
            display: inline-block;
            padding: var(--ddd-spacing-2);
        }
        .logo-container {
            display: block;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            width: 100%;
            height: auto;
            border-radius: var(--ddd-radius-circle);
            border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        }
        .logo-container:hover {
            box-shadow: var(--ddd-box-shadow-sm);
        }
        :host([size="small"]) { width: 48px; }
        :host([size="medium"]) { width: 96px; }
        :host([size="large"]) { width: 192px; }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="logo-container">
            <img
                src="${new URL('.assets/logo.png', import.meta.url).href}"
                alt="Ice Elite Association Logo"
                loading="${this.loading === 'eager' ? 'eager' : 'lazy'}"
            />
        </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(EliteLogo.tag, EliteLogo);