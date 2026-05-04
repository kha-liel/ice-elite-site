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
        display: flex;
        position: relative;
        flex: 1;
      }

      .item-main {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--ddd-theme-default-wonderPurple);
        font-weight: bold;
        box-sizing: border-box;
        cursor: pointer;
        padding: 10px 0px;
        white-space: nowrap;
      }

      .item-main:hover {
        color: var(--ddd-theme-default-athertonViolet);
      }

      .item-main:hover .arrow {
        border-top-color: var(--ddd-theme-default-athertonViolet);
      }

      .arrow {
        width: 0; 
        height: 0; 
        margin-left: 8px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid var(--ddd-theme-default-wonderPurple);
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
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--ddd-box-shadow-md);
        z-index: 10;
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
        font-weight: bold;
        color: var(--ddd-theme-default-wonderPurple);
        font-size: 14px;
      }

      .sub-link:hover {
        color: var(--ddd-theme-default-athertonViolet);
      }

      @media (max-width: 1125px) {
        :host {
          display: block;
          width: 100%;
        }

        .item-main {
          justify-content: center;
          padding: 15px 0px;
        }

        .sub-menu {
          position: static;
          align-items: left;
          box-shadow: none;
          border: none;
          padding: 10px 0;
        }

        .item-main[aria-expanded="true"] + .sub-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sub-link {
          text-align: center;
          width: 100%;
          padding: 10px 0;
        }
      }
    `;
  }

  _handleLinkClick(e) {
    const hasItems = this.items && this.items.length > 0;
    const isExternal = this.link.startsWith('http');

    if (hasItems) {
      e.preventDefault();
      return;
    }

    if (!isExternal) {
      e.preventDefault();
      window.history.pushState({}, '', this.link);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }

  render() {
    const hasItems = this.items && this.items.length > 0;
    return html`
      <a class="item-main" href="${this.link}" @click="${this._handleLinkClick}" aria-expanded="${this.isOpen}">
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