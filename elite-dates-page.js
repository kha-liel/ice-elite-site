import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteDatesPage extends DDD {
  static get tag() { return "elite-dates-page"; }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        padding: var(--ddd-spacing-10);
        min-height: 80vh;
      }
      .container {
        max-width: 900px;
        margin: 0 auto;
      }
      h1 {
        color: var(--ddd-theme-default-wonderPurple);
        font-family: var(--ddd-font-navigation);
        border-bottom: 2px solid var(--ddd-theme-default-limestone);
        padding-bottom: var(--ddd-spacing-4);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: var(--ddd-spacing-6);
      }
      th {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-4);
        text-align: left;
      }
      td {
        padding: var(--ddd-spacing-4);
        border-bottom: 1px solid var(--ddd-theme-default-limestone);
      }
      tr:hover {
        background-color: var(--ddd-theme-default-infoLight);
      }
    `];
  }

  render() {
    return html`
      <div class="container">
        <h1>Public Skate: Dates & Times</h1>
        <p>Join us for open ice sessions. All skill levels are welcome!</p>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Session Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>4:00 PM - 6:00 PM</td>
              <td>All Ages</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>1:00 PM - 3:00 PM</td>
              <td>Family Skate</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
customElements.define(EliteDatesPage.tag, EliteDatesPage);