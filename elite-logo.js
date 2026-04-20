import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteLogo extends DDD {

  static get tag() {
    return "elite-logo";
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
            flex-shrink: 0;
            width: 50px;
            height: 50px;
        }

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
        .logo-container {
            display: block;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            width: var(--elite-logo-width, 100px);
            height: var(--elite-logo-height, 100px);
            border-radius: var(--ddd-radius-circle);
            border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        }
        .logo-container:hover {
            box-shadow: var(--ddd-box-shadow-sm);
        }
        :host([size="small"]) { width: 48px; height: 50px; }
        :host([size="medium"]) { width: 96px; height: 100px; }
        :host([size="large"]) { width: 192px; height: 194px; }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="logo-container">
            <img
                src="${new URL('./lib/assets/ice-elite-logo.png', import.meta.url).href}"
                alt="Ice Elites Logo"
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