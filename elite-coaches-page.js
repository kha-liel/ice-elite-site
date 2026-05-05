import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EliteCoachesPage extends DDD {
  static get tag() { return "elite-coaches-page"; }

  static get styles() {
    return [super.styles, 
    css`
      :host {
        display: block;
        padding: var(--ddd-spacing-10);
        background-color: var(--ddd-theme-default-infoLight);
        min-height: 80vh;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--ddd-theme-default-wonderPurple);
        font-family: var(--ddd-font-navigation);
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }
      .coach-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--ddd-spacing-6);
      }
      .coach-card {
        background: white;
        padding: var(--ddd-spacing-5);
        border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        border-radius: var(--ddd-radius-md);
        text-align: center;
        box-shadow: var(--ddd-box-shadow-sm);
      }
      .coach-image {
        width: 100%;
        height: 400px;
        background-color: var(--ddd-theme-default-limestone);
        margin-bottom: var(--ddd-spacing-4);
        overflow: hidden;
        border-radius: var(--ddd-radius-md);
      }
      .coach-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    
      h3 {
        color: var(--ddd-theme-default-nittanyNavy);
        margin: var(--ddd-spacing-2) 0;
      }
      p {
        color: var(--ddd-theme-default-slateGray);
        font-size: var(--ddd-font-size-s);
      }
    `];
  }

  render() {
    return html`
      <div class="container">
        <h1>Meet Our Coaches</h1>
        <div class="coach-grid">
          <div class="coach-card">
            <div class="coach-image">
                <img src="${new URL('./lib/assets/coach-skating.png', import.meta.url).href}" alt="Coach Katie Photo">
            </div>
            <h3>Coach Katie</h3>
            <p>Specializing in Figure Skating Basics and Youth Development.</p>
          </div>
          <div class="coach-card">
            <div class="coach-image">
                <img src="${new URL('./lib/assets/coach-hockey.png', import.meta.url).href}" alt="Coach Matt Photo">
            </div>
            <h3>Coach Matt</h3>
            <p>Advanced Hockey Skills and Power Skating Instructor.</p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(EliteCoachesPage.tag, EliteCoachesPage);