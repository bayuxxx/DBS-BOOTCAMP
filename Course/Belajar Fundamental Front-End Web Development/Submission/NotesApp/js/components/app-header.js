import { AppHeaderStyle } from "../style/app-header-style";
import { animate } from "motion";

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addAnimations();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                ${AppHeaderStyle}
            </style>
            <header class="header">
                <div class="header-content">
                    <a href="/" class="logo">
                        <span class="logo-icon">📝</span>
                        Notes App 
                    </a>
                </div>
            </header>
        `;
  }

  addAnimations() {
    const header = this.shadowRoot.querySelector(".header");

    animate(
      header,
      { opacity: [0, 1], y: [-20, 0] },
      { duration: 0.6, easing: "ease-out" },
    );
  }
}

customElements.define("app-header", AppHeader);
