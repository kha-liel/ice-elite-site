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
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menuOpen: { type: Boolean, attribute: "menu-open", reflect: true}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-infoLight);
        border-bottom: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        //padding: var(--ddd-spacing-4) var(--ddd-spacing-12);
        position: sticky;
        top: 0;
        z-index: 100;
        width: 100%;
        box-sizing: border-box;
      }

      .navbar {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-width: 100%;
        margin: 0 auto;
        width: 100%;
        //padding: 0 var(--ddd-spacing-12);
        box-sizing: border-box;
      }

      .navbar ul {
        --elite-nav-font-size: var(--ddd-font-size-xs);
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        margin: 0;
        padding-right: 24px;
        gap: var(--ddd-spacing-4);
        white-space: nowrap;
      }

      .navbar li {
        position: relative;
        display: flex;
        align-items: center;
      }

      .navbar a:hover {
        color: var(--ddd-theme-default-athertonViolet);
      }

      .navbar li elite-dropdown-list {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 100;
      }

      .logo-container {
        display: flex;
        align-items: center;
        max-height: 167px;
        flex: 0 1 auto;
        min-width: fit-content;
        justify-content: flex-start;
      }

      .menu-toggle {
        display: none;
        background: none;
        border: none;
        padding: var(--ddd-spacing-2);
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
        left: 0;
        transition: all 0.3s ease-in-out;
      }

      .hamburger-icon::before { top: -8px; }
      .hamburger-icon::after { bottom: -8px; }

      :host([menu-open]) .hamburger-icon::before {
        transform: rotate(45deg) translate(5px, 5px);
        width: 20px;
      }

      :host([menu-open]) .hamburger-icon::after {
        transform: rotate(45deg) translate(5px, -5px);
        width: 20px;
      }

      @media (max-width: 1200px) {
        :host {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        }
        .navbar ul {
          gap: var(--ddd-spacing-2);
          --elite-nav-font-size: var(--ddd-font-size-4xs);
        }
      }

      @media (max-width: 900px) {
        .menu-toggle {
          display: block;
          margin-left: auto;
          height: 100%;
        }
        .logo-container {
          width: 100%;
          justify-content: left;
        }
        .navbar ul {
          display: none;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 200px;
          position: absolute;
          height: auto;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--ddd-theme-default-infoLight);
          z-index: 9999;
          border-bottom: var(--ddd-border-sm);
          padding: var(--ddd-spacing-4);
          margin: 0;
          box-shadow: var(--ddd-box-shadow-md);
        }

        :host {
          overflow: visible;
        }

        :host([menu-open]) .navbar ul {
          display: flex;
          visibility: visible;
          opacity: 1;
        }
      }
    `];
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Lit render the HTML
  render() {
    return html`
          <nav class="navbar">
            <div class="logo-container">
              <elite-logo size="small"></elite-logo>
            </div>
            <button class="menu-toggle" @click="${this.toggleMenu}">
              <span class="hamburger-icon"></span>
            </button>
            <ul>
              <elite-nav-item title="Home" link="?page=home"></elite-nav-item>
              <elite-nav-item title="Public Skate" link="?page=public-skate"></elite-nav-item>
              <elite-nav-item title="Learn to Skate" link="?page=learn-to-skate"></elite-nav-item>
              <elite-nav-item title="Membership & Registration" link="?page=membership"></elite-nav-item>
              <elite-nav-item title="Classes" link="?page=classes"></elite-nav-item>
              <elite-nav-item title="Schedule" link="?page=schedule"></elite-nav-item>
              <elite-nav-item title="About" link="?page=about"></elite-nav-item>
            </ul>
          </nav>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(EliteNavBar.tag, EliteNavBar);