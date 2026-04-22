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
        
      }

      .navbar {
        
      }

      .navbar ul {
        
      }

      .navbar li {
        
      }

      .logo-item {
        
      }

      .navbar a {
        
      }

      .navbar a:hover {

      }

      .navbar a::after {
       
      }

      .navbar a:hover::after {
        
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div>
          <nav class="navbar">
            <div class="logo-container">
              <elite-logo size="small"></elite-logo>
            </div>
            <ul>
              <li><a href="?page=home">Home</a></li>
              <li><a href="?page=learn-to-skate">Learn to Skate</a></li>
              <li><a href="?page=membership-&-registration">Membership & Registration</a></li>
              <li><a href="?page=classes">Classes</a></li>
              <li><a href="?page=competitions">Competitions</a></li>
              <li><a href="?page=schedule">Schedule</a></li>
              <li><a href="?page=about">About</a></li>
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