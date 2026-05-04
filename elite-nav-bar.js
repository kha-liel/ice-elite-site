import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./elite-dropdown-list.js";
import "./elite-nav-item.js";

export class EliteNavBar extends DDD {

  static get tag() {
    return "elite-nav-bar";
  }

  constructor() {
    super();
    this.menuOpen = false;
    this.menuItems = [
      { title: 'Home', link: '/'},
      { title: 'Public Skate', link: '/public-skate',
        items: [{ title: 'Dates & Times', link: '/public-skate/dates-and-times'}]},
      { title: 'Learn to Skate', link: '/learn-to-skate',
        items: [
          { title: 'Preschool (Ages 3-5)', link: '/learn-to-skate/preschool'},
          { title: 'Youth (Ages 6-12)', link: '/learn-to-skate/youth'},
          { title: 'Teen & Adult', link: '/learn-to-skate/teen-and-adult'},
          { title: 'Private Lessons', link: '/learn-to-skate/private-lessons'}]},
      { title: 'Classes', link: '/classes',
        items: [
          { title: 'Figure Skating Basics', link: '/classes/figure-skating-basics'},
          { title: 'Hockey Skills', link: '/classes/hockey-skills'},
          { title: 'Off-Ice Training', link: '/classes/off-ice-training'},
          { title: 'Bridge Program', link: '/classes/bridge-program'}]},
      { title: 'Membership & Registration', link: '/membership',
        items: [
          { title: 'League Regsitration', link: '.membership/league-registration'},
          { title: 'Membership Tiers/Benefits', link: '/membership/tiers-and-benefits'},
          { title: 'Waivers & Documents', link: '/membership/waivers-and-documents'},
          { title: 'Scholarship Information', link: '/membership/scholarship-information'}]},
      { title: 'Schedule', link: '/schedule'},
      { title: 'About', link: '/about',
        items: [
          { title: 'Our Coaches', link: '/about/coaches'},
          { title: 'Competitions and Programs', link: '/about/competitions'},
          { title: 'Rink Location & Directions', link: '/about/rink-location'},
          { title: 'Safety & SafeSprot Policies', link: '/about/safety'},
          { title: 'Contact Us', link: '/about/contact-us'}]}
    ];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menuOpen: { type: Boolean, attribute: "menu-open", reflect: true}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-infoLight);
        border-bottom: var(--ddd-border-sm) solid var(--ddd-theme-default-limestone);
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1000;
      }

      .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between; //flex-start
        padding: 0 var(--ddd-spacing-4);
        height: 100px;
        position: relative;
        box-sizing: border-box;
      }

      elite-dropdown-list {
        flex: 1;
        display: block;
      }

      .menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
      }

      .hamburger-icon {
        width: 30px;
        height: 3px;
        background-color: var(--ddd-theme-default-nittanyNavy);
        position: relative;
        display: block;
        transition: all 0.3s ease-in-out;
      }

      .hamburger-icon::before, .hamburger-icon::after {
        content: "";
        width: 30px;
        height: 3px;
        background-color: var(--ddd-theme-default-nittanyNavy);
        position: absolute;
        left: 0;
        transform-origin: right center;
        transition: all 0.3s ease-in-out;
      }

      .hamburger-icon::before { top: -8px; }
      .hamburger-icon::after { bottom: -8px; }

      :host([menu-open]) .hamburger-icon {
        background-color: transparent;
        transform: rotate(90deg);
      }

      :host([menu-open]) .hamburger-icon::before {
        transform: rotate(-45deg);
        width: 20px;
        top: -1px;
      }

      :host([menu-open]) .hamburger-icon::after {
        transform: rotate(45deg);
        width: 20px;
        bottom: -1px;
      }

      @media (max-width: 1125px) {
        .menu-toggle {
          display: block;
        }
      }
    `];
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
      <nav class="navbar">
        <elite-logo size="small"></elite-logo>
        <elite-dropdown-list .menuItems="${this.menuItems}" ?menu-open="${this.menuOpen}"></elite-dropdown-list>
        <div class="menu-toggle" @click="${this.toggleMenu}">
          <span class="hamburger-icon"></span>
        </div>
      </nav>
    `;
  }
}

globalThis.customElements.define(EliteNavBar.tag, EliteNavBar);