import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

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
        background-color: var(--ddd-theme-default-white);
        border-bottom: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
      }

      .navbar {
        width: 100%;
      }

      .navbar ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: var(--ddd-spacing-4) var(--ddd-spacing-8);
        width: 100%;
        //gap: var(--ddd-spacing-6);
      }

      .logo-item {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        //justify-content: center;
        padding: 0 var(--ddd-spacing-4);
      }

      .navbar a {
        text-decoration: none;
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weigh-bold);
        white-space: nowrap;
        color: var(--ddd-theme-default-nittanyNavy);
      }

      .navbar a:hover {
        color: var(--ddd-theme-default-beaverBlue);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div>
          <nav class="navbar">
            <ul>
              <li><a href="?home">Home</a></li>
              <li><a href="?skater-dev-tools">Skater Development Tools</a></li>
              <li><a href="?volunteer-parent-reqs">Volunteer & Parent Requirements</a></li>
              <li><a href="?members-registration">Membership & Registration</a></li>

              <li class="logo-item"><elite-logo size="small"></elite-logo></li>

              <li><a href="?programs-classes">Programs & Classes</a></li>
              <li><a href="?competitions">Competitions</a></li>
              <li><a href="?schedule">Schedule</a></li>
              <li><a href="?about">About</a></li>
            </ul>
          </nav>
        </div>`;
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