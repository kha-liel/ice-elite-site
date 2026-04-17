import { LitElement, html, css } from "lit";
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
      .navbar a:hover {
        background-color: var(--ddd-theme-default-pughBlue);
        color: var(--ddd-theme-default-coalyGray);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div>
          <nav class="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#">Skater Development Tools</a></li>
              <li><a href="#">Volunteer & Parent Requirements</a></li>
              <li><a href="#">Membership & Registration</a></li>
              <li><elite-logo size="small"></elite-logo></li>
              <li><a href="#">Programs & Classes</a></li>
              <li><a href="#">Competitors</a></li>
              <li><a href="#">Schedule</a></li>
              <li><a href="#">About</a></li>
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