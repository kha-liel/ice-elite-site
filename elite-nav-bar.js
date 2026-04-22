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
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties
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
        list-style: none;
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        margin: 0;
        padding-right: 24px;
        gap: var(--ddd-spacing-6);
        white-space: nowrap;
      }

      .navbar li {
        position: relative;
        display: flex;
        align-items: center;
      }

      .navbar a {
        text-decoration: none;
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weight-bold);
        font-size: var(--ddd-font-size-m);
        color: var(--ddd-theme-default-wonderPurple);
        text-transform: capitalize;
        white-space: nowrap;
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
        //flex: 0 0 auto;
        flex: 1;
        min-width: fit-content;
        justify-content: flex-start;
      }

      @media (max-width: 1200px) {
        :host {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        }
        .navbar ul {
          gap: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
        }
      }

      @media (max-width: 768px) {
        .navbar {
          flex-wrap: wrap;
          justify-content: center;
        }
        .logo-container {
          width: 100%;
          justify-content: center;
          margin-bottom: var(--ddd-spacing-4);
        }
        .navbar ul {
          font-size: var(--ddd-font-size-xs);
        }
      }
    `];
  }

  render() {
    const publicSkateItems = [
      { title: "Dates & Times", link: "?page=dates-&-times" }
    ]
  }

  // Lit render the HTML
  render() {
    return html`
          <nav class="navbar">
            <div class="logo-container">
              <elite-logo size="medium"></elite-logo>
            </div>
            <ul>
              <elite-nav-item title="Home" link="?page=home"></elite-nav-item>
              <elite-nav-item title="Public Skate" link="?page=public-skate" .items="${publicSkateItems}"></elite-nav-item>
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