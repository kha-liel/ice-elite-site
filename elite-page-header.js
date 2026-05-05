import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-nav-bar.js";

export class ElitePageHeader extends DDD {

  static get tag() {
    return "elite-page-header";
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
    :host {
      display: block;
      width: 100%;
      position: sticky;
      top: var(--ddd-spacing-0);
      z-index: 1000;
      background-color: var(--ddd-theme-default-white);
      box-shadow: var(--ddd-box-shadow-sm);
    }

    header {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .top-bar {
      background-color: var(--ddd-theme-default-athertonViolet);
      color: var(--ddd-theme-default-white);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
      text-align: center;
      font-weight: var(--ddd-font-weight-bold);
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <header>
          <div class="top-bar">
            Registration for the Summer Bridge Program is now open!
          </div>
          <elite-nav-bar></elite-nav-bar>
        </header>
        `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ElitePageHeader.tag, ElitePageHeader);