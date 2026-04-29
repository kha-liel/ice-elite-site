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

  // Lit scoped styles
  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
      }

      .item-main {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        color: var(--ddd-theme-default-nittanyNavy);
        font-weight: bold;
        cursor: pointer;
        padding: 10px 0;
        white-space: nowrap;
      }

      .arrow {
        width: 0; height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid var(--ddd-theme-default-nittanyNavy);
        transition: transform 0.3s ease;
      }

      .item-main[aria-expanded="true"] .arrow {
        transform: rotate(180deg);
      }

      .sub-menu {
        display: none;
        position: absolute; 
        top: 100%;
        left: 0;
        background: var(--ddd-theme-default-infoLight);
        min-width: 220px;
        box-shadow: var(--ddd-box-shadow-md);
        z-index: 1000;
        flex-direction: column;
        padding: 10px 0;
        border: 1px solid var(--ddd-theme-default-limestone);
      }

      .item-main[aria-expanded="true"] + .sub-menu {
        display: flex;
      }

      .sub-link {
        padding: 8px 20px;
        text-decoration: none;
        color: var(--ddd-theme-default-nittanyNavy);
        font-size: 14px;
      }

      @media (max-width: 1125px) {
        .sub-menu {
          position: static;
          box-shadow: none;
          border: none;
          //padding-left: 20px;
        }
      }
    `;
  }

  render() {
    const hasItems = this.items && this.items.length > 0;
    return html`
      <a class="item-main" href="${this.link}" @click="${(e) => {
        if(hasItems) { e.preventDefault(); this.isOpen = !this.isOpen; }
      }}" aria-expanded="${this.isOpen}">
        ${this.title}
        ${hasItems ? html`<span class="arrow"></span>` : ''}
      </a>
      <div class="sub-menu">
        ${this.items?.map(i => html`<a class="sub-link" href="${i.link}">${i.title}</a>`)}
      </div>
    `;
  }
}

globalThis.customElements.define(EliteNavItem.tag, EliteNavItem);