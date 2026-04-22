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
            vertical-align: middle;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .logo-container {
            display: block;
            overflow: hidden;
            width: 100%;
            height: 100%;
            border-radius: var(--ddd-radius-md);
            border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        }
        .logo-container:hover {
            box-shadow: var(--ddd-box-shadow-sm);
        }
        :host([size="small"]) { width: 200px; height: 120px; }
        :host([size="medium"]) { width: 300px; height: 240px; }
        :host([size="large"]) { width: 400px; height: 340px; }
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