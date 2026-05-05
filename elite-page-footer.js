import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class ElitePageFooter extends DDD {

  static get tag() {
    return "elite-page-footer";
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
        background-color: var(--ddd-theme-default-athertonViolet);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-4) 0;
        margin-top: auto;
      }

      .footer-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--ddd-spacing-4);
        gap: var(--ddd-spacing-6);
      }

      .footer-section {
        flex: 1;
        min-width: 250px;
      }

      h3 {
        font-family: var(--ddd-font-navigation);
        color: var(--ddd-theme-default-infoLight);
        margin-bottom: var(--ddd-spacing-2);
        text-transform: uppercase;
        font-size: var(--ddd-font-size-m);
      }

      p, a {
        font-family: var(--ddd-font-primary);
        color: var(--ddd-theme-default-white);
        text-decoration: none;
        display: block;
        margin-bottom: var(--ddd-spacing-2);
      }

      a:hover {
        color: var(--ddd-theme-default-infoLight);
        text-decoration: underline;
      }

      .bottom-bar {
        text-align: center;
        margin-top: var(--ddd-spacing-2);
        padding-top: var(--ddd-spacing-2);
        border-top: 1px solid var(--ddd-theme-default-accent);
        opacity: 0.8;
      }

      @media (max-width: 768px) {
        .footer-container {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <footer class="footer-container">
          <div class="footer-section">
            <h3>Edge Elite</h3>
            <p>Elevating youth figure sakting through professional coaching and community dedication.</p>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <a href="https://hax.psu.edu">Schedule</a>
            <a href="https://hax.psu.edu">Classes</a>
            <a href="https://hax.psu.edu">Membership</a>
            <a href="https://hax.psu.edu">Contact Us</a>
          </div>

          <div class="footer-section">
            <h3>Location</h3>
            <p> 297 Main Street</p>
            <p>New Rochelle, New York 10804</p>
            <p>Local Rink Arena</p>
          </div>
        </footer>
        <div class="bottom-bar">
          <p>&copy; ${new Date().getFullYear()} Edge Elite Youth Skating. All rights reserved.</p>
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

globalThis.customElements.define(ElitePageFooter.tag, ElitePageFooter);