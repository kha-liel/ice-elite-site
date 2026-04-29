import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-nav-item.js";

export class EliteDropdownList extends DDD {

  static get tag() {
    return "elite-dropdown-list";
  }

  // might not need
  constructor() {
    super();
    this.items = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menuItems: { type: Array },
      menuOpen: { type: Boolean, attribute: "menu-open", reflect: true }
    };
  }

  // Lit scoped styles
  static get styles() {
    return css`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: var(--ddd-spacing-6);
      }

      @media (max-width: 1125px) {
        ul {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--ddd-theme-default-infoLight);
          padding: var(--ddd-spacing-4);
          box-shadow: var(--ddd-box-shadow-md);
        }
        :host([menu-open]) ul {
          display: flex;
        }
      }
    `;
  }

  render() {
    return html`
      <ul>
        ${this.menuItems.map(item => html`
          <elite-nav-item .title="${item.title}" .link="${item.link}" .items="${item.items}"></elite-nav-item>
        `)}
      </ul>
    `;
  }
}

globalThis.customElements.define(EliteDropdownList.tag, EliteDropdownList);