/**
 * Copyright 2026 Khaliel Myrie
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-nav-bar";
import "./elite-page-header.js";
import "./elite-page-content.js";
import "./elite-page-footer.js";
import "./elite-logo";

/**
 * `ice-elite-site`
 * 
 * @demo index.html
 * @element ice-elite-site
 */
export class IceEliteSite extends DDD {

  static get tag() {
    return "ice-elite-site";
  }

  constructor() {
    super();
    this.activePage = 'home';
    window.addEventListener('popstate', () => this._handleRouteChange());
    this._handleRouteChange();
  }

  _handleRouteChange() {
    const path = window.location.pathname.replace('/', '');
    this.activePage = path || 'home';
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      activePage: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <header>
        <elite-page-header></elite-page-header>
        <elite-page-content>${this._renderActivePage()}</elite-page-content>
        <elite-page-footer></elite-page-footer>
      </header>`;
  }

  _renderActivePage() {
    switch (this.activePage) {
      case 'schedule':
        return html``
    }
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(IceEliteSite.tag, IceEliteSite);