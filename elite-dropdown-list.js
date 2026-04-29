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
    return [super.styles,
    css`

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    elite-nav-item { position: relative; }

    @media (max-wdith: 1125px) {
      ul {
        display: none;
        flex-direction: column;
        //position: absolute;
        //top: 100%;
        //left: 0;
        width: 100%;
        background-color: var(--ddd-theme-default-infoLight);
      }
      :host([menu-open]) ul {
        display: flex;
      }
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <ul>
          ${this.menuItems.map(item => html`
            <li>
              <elite-nav-item
                .title="${item.title}"
                .link="${item.link}"
                .items="${item.items}">
              </elite-nav-item>
            </li>`)}
        </ul>>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(EliteDropdownList.tag, EliteDropdownList);