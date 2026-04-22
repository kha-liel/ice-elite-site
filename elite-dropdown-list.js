import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteDropdownList extends DDD {

  static get tag() {
    return "elite-dropdown-list";
  }

  constructor() {
    super();
    this.items = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      items: { type: Array }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

    :host {
      display: block;
      background-color: var(--ddd-theme-default-white);
      min-width: 220px;
      border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
      box-shadow: var(--ddd-box-shadow-md);
      padding: var(--ddd-spacing-2) 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      width: 100%;
    }

    a {
      display: block;
      padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
      text-decoration: none;
      font-family: var(--ddd-font-navigation);
      font-size: var(--ddd-font-size-xs);
      font-weight: var(--ddd-font-weight-regular);
      color: var(--ddd-theme-default-nittanyNavy);
    }

    a :hover {
      background-color: var(--ddd-theme-default-limestone);
      color: var(--ddd-theme-default-beaverBlue);
      text-decoration: none;
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <ul>
          ${this.items.map(item => html`
            <li>
              <a href="${item.link || '#'}">${item.title || item}</a>
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