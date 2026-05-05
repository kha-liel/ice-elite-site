import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-dropdown-list.js";
import "./elite-nav-item.js";

export class EliteNavBar extends DDD {

  static get tag() {
    return "elite-nav-bar";
  }

  constructor() {
    super();
    this.menuOpen = false;
    this.menuItems = [];
    this.getNavData();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menuOpen: { type: Boolean, attribute: "menu-open", reflect: true },
      menuItems: { type: Array }
    };
  }

  async getNavData() {
    try {
      const response = await fetch('/public/api/menu.json');
      const data = await response.json();
      this.menuItems = this.buildMenu(data.items);
    } catch (e) {
      console.error("Error loading JSON menu:", e)
    }
  }

  buildMenu(items) {
    const map = {};
    const tree = [];

    items.forEach(item => {
      map[item.id] = {
        title: item.title,
        link: item.slug,
        items: []
      };
    });

    items.forEach(item => {
      if (item.parent && map[item.parent]) {
        map[item.parent].items.push(map[item.id]);
      } else if (!item.parent) {
        tree.push(map[item.id]);
      }
    });
    return tree;
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-infoLight);
        border-bottom: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        position: sticky;
        top: var(--ddd-spacing-0);
        width: 100%;
        z-index: 1000;
      }

      .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--ddd-spacing-12);
        height: 100px;
        position: relative;
        box-sizing: border-box;
        gap: var(--ddd-spacing-8);
      }

      elite-dropdown-list {
        flex: 0 1 auto;
        margin-left: auto;
        display: block;
        justify-content: flex-end;
      }

      .menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
      }

      .hamburger-icon {
        width: 30px;
        height: 3px;
        background-color: var(--ddd-theme-default-nittanyNavy);
        position: relative;
        display: block;
        transition: all 0.3s ease-in-out;
      }

      .hamburger-icon::before, .hamburger-icon::after {
        content: "";
        width: 30px;
        height: 3px;
        background-color: var(--ddd-theme-default-nittanyNavy);
        position: absolute;
        left: var(--ddd-spacing-0);
        transform-origin: right center;
        transition: all 0.3s ease-in-out;
      }

      .hamburger-icon::before { top: -8px; }
      .hamburger-icon::after { bottom: -8px; }

      :host([menu-open]) .hamburger-icon {
        background-color: var(--ddd-theme-default-potential10);
        transform: rotate(90deg);
      }

      :host([menu-open]) .hamburger-icon::before {
        transform: rotate(-45deg);
        width: 20px;
        top: -1px;
      }

      :host([menu-open]) .hamburger-icon::after {
        transform: rotate(45deg);
        width: 20px;
        bottom: -1px;
      }

      @media (max-width: 1125px) {
        .menu-toggle {
          display: block;
        }
      }
    `];
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
      <nav class="navbar">
        <elite-logo size="small"></elite-logo>
        <elite-dropdown-list .menuItems="${this.menuItems}" ?menu-open="${this.menuOpen}"></elite-dropdown-list>
        <div class="menu-toggle" @click="${this.toggleMenu}">
          <span class="hamburger-icon"></span>
        </div>
      </nav>
    `;
  }
}

globalThis.customElements.define(EliteNavBar.tag, EliteNavBar);