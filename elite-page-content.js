import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class ElitePageContent extends DDD {

  static get tag() {
    return "elite-page-content";
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
        min-height: 60vh;
        background-color: var(--ddd-theme-default-white);
      }

      .content-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
        box-sizing: border-box;
      }

      ::slotted(h1) {
        font-family: var(--ddd-font-navigation);
        color: var(--ddd-theme-default-wonderPurple);
        margin-bottom: var(--ddd-spacing-6);
      }

      ::slotted(p) {
        font-family: var(--ddd-font-primary);
        line-height: 1.6;
        color: var(--ddd-theme-default-nittanyNavy);
        margin-bottom: var(--ddd-spacing-4);
      }

      @media (max-width: 768px) {
        .content-container {
          padding: var(--ddd-spacing-4);
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <section class="content-container">
          <div class="content-area">
            <slot></slot>
          </div>
        </section>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ElitePageContent.tag, ElitePageContent);