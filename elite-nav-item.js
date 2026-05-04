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
        display: inline-flex;
        position: relative;
        //flex: 1;
        justify-content: center;
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
        padding: 10px var(--ddd-spacing-2);
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
        right: auto;
        background: var(--ddd-theme-default-infoLight);
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--ddd-box-shadow-md);
        z-index: 100;
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
        text-align: left;
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
    const link = e.currentTarget.getAttribute('href');
    const hasItems = this.items && this.items.length > 0;
    
    if (hasItems && e.currentTarget.classList.contains('item-main')) {
      e.preventDefault();
      e.stopPropagation(); 
      this.isOpen = !this.isOpen;
      return; 
    }

    const isExternal = link && link.startsWith('http');

    if (link && !isExternal) {
      e.preventDefault();
      e.stopPropagation();
      
      window.history.pushState({}, '', link);
      window.dispatchEvent(new PopStateEvent('popstate'));
      
      this.isOpen = false;
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
        ${this.items?.map(i => html`
          <a class="sub-link" href="${i.link}" @click="${this._handleLinkClick}">${i.title}</a>`)}
      </div>
    `;
  }
}

globalThis.customElements.define(EliteNavItem.tag, EliteNavItem);