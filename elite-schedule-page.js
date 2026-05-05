import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteSchedulePage extends DDD {
  static get tag() { return "elite-schedule-page"; }

  static get styles() {
    return [super.styles, 
    css`
      :host {
        display: block;
        padding: var(--ddd-spacing-8);
      }
      h1 {
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
      }
    `];
  }

  render() {
    return html`
      <h1>League Schedule</h1>
      <p>Spring 2026 Season details for Edge Elite Youth Skating.</p>
    `;
  }
}
customElements.define(EliteSchedulePage.tag, EliteSchedulePage);