import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-calendar-strip";

export class EliteHomePage extends DDD {

  static get tag() {
    return "elite-home-page";
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-8);
          background-color: var(--ddd-theme-default-infoLight);
          min-height: 50vh;
        }

        .hero {
          text-align: center;
          padding: var(--ddd-spacing-10) 0;
        }

        h1 {
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-xxl);
          color: var(--ddd-theme-default-wonderPurple);
          margin-bottom: var(--ddd-spacing-4);
        }

        p {
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-nittanyNavy);
          max-width: 800px;
          margin: 0 auto var(--ddd-spacing-6) auto;
        }

        .cta-button {
          background-color: var(--ddd-theme-default-wonderPurple);
          color: white;
          padding: var(--ddd-spacing-4) var(--ddd-spacing-8);
          text-decoration: none;
          font-weight: bold;
          border-radius: var(--ddd-radius-sm);
          transition: background-color 0.3s ease;
          display: inline-block;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: var(--ddd-theme-default-athertonViolet);
        }
      `
    ];
  }

  render() {
    return html`
      <section class="hero">
        <h1>Welcome to Edge Elite Youth Skating</h1>
        <p>
          Providing premier figure skating and hockey skill development in New Rochelle and the Westchester area. 
          Join us on the ice to take your skills to the next level.
        </p>

        <a class="cta-button" @click="${this._navigateToSchedule}">
          View Full Schedule
        </a>
      </section>
      <section class="calendar-strip">
        <h3>This Week's Schedule</h3>
        <elite-calendar-strip></elite-calendar-strip>
      </section>
    `;
  }

  _navigateToSchedule(e) {
    e.preventDefault();
    window.history.pushState({}, '', '/schedule');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

globalThis.customElements.define(EliteHomePage.tag, EliteHomePage);