/**
 * Copyright 2026 Khaliel Myrie
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-nav-bar";
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
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <header>
        <nav>
          <!--<div class="nav-group">
            <a href="?page=home">Home</a>
            <a href="?page=schedule">Schedule</a>
          </div>-->
          <elite-nav-bar></elite-nav-bar>
        </nav>
      </header>`;
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