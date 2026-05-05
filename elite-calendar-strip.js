import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-event-pill.js";

export class EliteCalendarStrip extends DDD {
  static get tag() { return "elite-calendar-strip"; }

  static get properties() {
    return {
      events: { type: Array },
      viewDate: { type: Object }, 
    };
  }

  constructor() {
    super();
    this.events = [];
    this.viewDate = new Date(); 
    this.updateSchedule();
  }

  async updateSchedule() {
    try {
      const response = await fetch("/public/api/schedule.json");
      const data = await response.json();
      this.events = data.games || [];
    } catch (e) {
      console.error("Error loading schedule:", e);
    }
  }

  get weekDays() {
    const days = [];
    const startOfWeek = new Date(this.viewDate);
    startOfWeek.setDate(this.viewDate.getDate() - this.viewDate.getDay());

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  }

  changeWeek(direction) {
    const newDate = new Date(this.viewDate);
    newDate.setDate(newDate.getDate() + (direction * 7));
    this.viewDate = newDate;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--ddd-spacing-4);
        background: var(--ddd-theme-default-slateLight);
      }
      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--ddd-spacing-4);
      }
      .strip-container {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: var(--ddd-spacing-2);
        text-align: center;
      }
      .day-column {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
        min-height: 100px;
        background: rgba(255, 255, 255, 0.5);
        padding: var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
      }
      .day-label {
        font-weight: var(--ddd-font-weight-bold);
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-nittanyNavy);
      }
      button {
        cursor: pointer;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        background: var(--ddd-theme-default-wonderPurple);
        color: var(--ddd-theme-default-white);
        border: none;
        border-radius: var(--ddd-radius-sm);
      }
    `;
  }

  render() {
    return html`
      <div class="nav-header">
        <button @click="${() => this.changeWeek(-1)}">Prev Week</button>
        <h3>Week of ${this.viewDate.toLocaleDateString()}</h3>
        <button @click="${() => this.changeWeek(1)}">Next Week</button>
      </div>
      <div class="strip-container">
        ${this.weekDays.map(day => {
          const dateString = day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
          const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
          
          const game = this.events.find(e => e.date === dateString);

          return html`
            <div class="day-column">
              <div class="day-label">${dayName} ${day.getDate()}</div>
              ${game 
                ? html`
                  <elite-event-pill 
                    opponent="${game.opponent}" 
                    time="${game.time}"
                    location="${game.location}">
                  </elite-event-pill>`
                : html`<span style="color: #ccc; font-size: 10px;">No Games</span>`
              }
            </div>
          `;
        })}
      </div>
    `;
  }
}
customElements.define(EliteCalendarStrip.tag, EliteCalendarStrip);