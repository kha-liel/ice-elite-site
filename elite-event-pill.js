import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteEventPill extends DDD {
  static get tag() { return "elite-event-pill"; }

  static get properties() {
    return {
      date: { type: String },
      opponent: { type: String },
      time: { type: String },
      location: { type: String },
      isCompact: { type: Boolean, attribute: "is-compact" }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background: white;
        border-radius: var(--ddd-radius-sm);
        border-left: 4px solid var(--ddd-theme-default-wonderPurple);
        padding: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-1);
        box-shadow: var(--ddd-box-shadow-sm);
      }
      .time { font-weight: bold; font-size: var(--ddd-font-size-xs); color: var(--ddd-theme-default-athertonViolet); }
      .opp { font-size: var(--ddd-font-size-xs); display: block; }
      .loc { font-size: 10px; color: gray; }
    `;
  }

  render() {
    return html`
      <div class="time">${this.time}</div>
      <div class="opp">vs ${this.opponent}</div>
      ${!this.isCompact ? html`<div class="loc">${this.location}</div>` : ""}
    `;
  }
}
customElements.define(EliteEventPill.tag, EliteEventPill);