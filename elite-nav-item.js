import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteNavItem extends DDD {

  static get tag() {
    return "elite-nav-item";
  }

  constructor() {
    super();
    this.title = "";
    this.link = "#";
    this.opened = false;
    this.items = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      link: { type: String },
      opened: { type: Boolean, reflect: true },
      items: { type: Array }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    
    .item-wrapper {
      display: flex;
      align-items: center;
      gap: var(--ddd-spacing-2);
      padding: var(--ddd-spscing-2) 0;
    }

    .chevron {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-right: 2px solid var(--ddd-theme-default-beaverBlue);
      border-bottom: 2px solid var(--ddd-theme-default-beaverBlue);
      transform: rotate()(45deg);
      margin-left: 4px;
      margin-top: -4px;
    }

    :host(:hover) .chevron {
      transform: rotate (-135deg);
      margin-top: 2px;
    }

    :host(:hover) a {
      text-decoration: none;
      color: var(--ddd-theme-default-athertonViolet);
    }

    a {
      text-decoration: none;
      font-family: var(--ddd-font-navigation);
      font-weight: var(--ddd-font-weight-bold);
      font-size: var(--ddd-font-size-m);
      color: var(--ddd-theme-default-wonderPurple);
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="item-wrapper">
          <a href="${this.link}">${this.title}</a>

          ${this.items && this.items.length > 0 ? html`
          <span class="chevron"></span>` : ""}
        </div>
        
        ${this.items && this.items.length > 0 ? html `
        <elite-dropdown-list .items="${this.items}"></elite-dropdown-list>` : ""}
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

globalThis.customElements.define(EliteNavItem.tag, EliteNavItem);