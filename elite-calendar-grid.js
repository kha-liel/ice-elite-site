import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-event-pill.js";

export class EliteCalendarGrid extends DDD {
  static get tag() { return "elite-calendar-grid"; }
  
  static get properties() {
    return { 
      events: { type: Array },
      viewDate: { type: Object } 
    };
  }

  constructor() {
    super();
    this.events = [];
    this.viewDate = new Date();
  }

  get daysInMonth() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    
    return { numDays, startDay };
  }

  changeMonth(direction) {
    const newDate = new Date(this.viewDate);
    newDate.setMonth(this.viewDate.getMonth() + direction);
    this.viewDate = newDate;
  }

  static get styles() {
    return css`
      :host { display: block; width: 100%; }
      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-4);
        background: var(--ddd-theme-default-slateLight);
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        border: 1px solid var(--ddd-theme-default-limestone);
        background-color: var(--ddd-theme-default-limestone);
        gap: 1px;
      }
      .day-label {
        background: var(--ddd-theme-default-nittanyNavy);
        color: white;
        text-align: center;
        padding: var(--ddd-spacing-2);
        font-weight: bold;
      }
      .cell {
        min-height: 120px;
        background: white;
        padding: var(--ddd-spacing-1);
      }
      .empty-cell { background: #f9f9f9; }
      button {
        cursor: pointer;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        background: var(--ddd-theme-default-wonderPurple);
        color: white;
        border: none;
        border-radius: var(--ddd-radius-sm);
      }
    `;
  }

  render() {
    const { numDays, startDay } = this.daysInMonth;
    const monthName = this.viewDate.toLocaleString('default', { month: 'long' });
    const year = this.viewDate.getFullYear();
    
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const blanks = Array.from({ length: startDay });
    const monthDays = Array.from({ length: numDays }, (_, i) => i + 1);

    return html`
      <div class="nav-header">
        <button @click="${() => this.changeMonth(-1)}">Previous Month</button>
        <h3>${monthName} ${year}</h3>
        <button @click="${() => this.changeMonth(1)}">Next Month</button>
      </div>
      <div class="grid">
        ${days.map(d => html`<div class="day-label">${d}</div>`)}
        
        ${blanks.map(() => html`<div class="cell empty-cell"></div>`)}
        
        ${monthDays.map(day => {
          const dayEvents = this.events.filter(e => {
            const eventDate = new Date(e.date + `, ${year}`);
            return eventDate.getDate() === day && 
                   eventDate.getMonth() === this.viewDate.getMonth();
          });

          return html`
            <div class="cell">
              <strong>${day}</strong>
              ${dayEvents.map(e => html`
                <elite-event-pill 
                  opponent="${e.opponent}" 
                  time="${e.time}" 
                  is-compact>
                </elite-event-pill>`)}
            </div>
          `;
        })}
      </div>
    `;
  }
}
customElements.define(EliteCalendarGrid.tag, EliteCalendarGrid);