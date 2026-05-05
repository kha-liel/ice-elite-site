import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-calendar-grid.js";

export class EliteSchedulePage extends DDD {
static get tag() {
    return "elite-schedule-page";
    }

  static get properties() {
    return {
      events: { type: Array }
    };
  }

  constructor() {
    super();
    this.events = [];
    this.loadData();
  }

  async loadData() {
    const response = await fetch("/public/api/schedule.json");
    const data = await response.json();
    this.events = data.games || [];
  }

  render() {
    return html`
      <h2>Full Season Schedule</h2>
      <elite-calendar-grid .events="${this.events}"></elite-calendar-grid>
    `;
  }
}
customElements.define(EliteSchedulePage.tag, EliteSchedulePage);