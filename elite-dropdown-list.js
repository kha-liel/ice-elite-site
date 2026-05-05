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
    this.openIndex = -1;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menuItems: { type: Array },
      menuOpen: { type: Boolean, attribute: "menu-open", reflect: true },
      openIndex: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return css`
      :host {
        display: block;
        flex: 1;
      }

      ul {
        list-style: none;
        margin: var(--ddd-spacing-0);
        margin-right: var(--ddd-spacing-12);
        padding: var(--ddd-spacing-0);
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: var(--ddd-spacing-4);
      }

      @media (max-width: 1125px) {
        ul {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: var(--ddd-spacing-0);
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
        ${this.menuItems.map((item, index) => html`
          <elite-nav-item 
            .title="${item.title}" 
            .link="${item.link}" 
            .items="${item.items}" 
            ?isOpen="${this.openIndex === index}"
            @click="${() => {
              this.openIndex = this.openIndex === index ? -1 : index;
              }}">
          </elite-nav-item>
        `)}
      </ul>
    `;
  }
}

globalThis.customElements.define(EliteDropdownList.tag, EliteDropdownList);