import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteNavItem extends DDD {

  static get tag() {
    return "elite-nav-item";
  }

  constructor() {
    super();
    this.isOpen = false;
    this.items = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      link: { type: String },
      isOpen: { type: Boolean, reflect: true },
      items: { type: Array }
    };
  }

  toggleDropdown(e) {
    if (this.items && this.items.length > 0) {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    }
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host { 
        display: block;
        position: relative;
      }
      .item-container {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--ddd-theme-default-wonderPurple);
        font-weight: bold;
        text-decoration: none;
      }
      .item-container:hover {
        text-decoration: none;
        color: var(--ddd-theme-default-athertonViolet);
      }
      .arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid var(--ddd-theme-default-nittanyNavy);
        transition: transform 0.3s ease;
      }
      :host([is-open]) .arrow {
        transform: rotate(180deg);
      }
      .dropdown-slot {
        display: none;
        background-color: var(--ddd-theme-default-infoLight);
        padding-left: 16px;
      }
      :host([is-open]) .dropdown-slot {
        display: block;
      }
      .sub-item {
        display: block;
        font-size: 14px;
        padding: 8px 0;
        text-decoration: none;
        color: var(--ddd-theme-default-nittanyNavy);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <a class="item-container" href="${this.link}" @click="${this.toggleDropdown}">
          <span>${this.title}</span>
          ${this.items?.length > 0 ? html`<span class="arrow"></span>` : ''}</a>
        </a>
        <div class="dropdown-slot">
          ${this.items?.map(sub => html`
            <a class="sub-item" href="${sub.link}">${sub.title}</a>}`)}
        </div>
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

globalThis.customElements.define(EliteNavItem.tag, EliteNavItem);