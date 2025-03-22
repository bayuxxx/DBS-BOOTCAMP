class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --primary-blue: #2196F3;
                    --primary-light: #64B5F6;
                    --primary-dark: #1976D2;
                    --accent-blue: #0D47A1;
                    --secondary-blue: #90CAF9;
                    --background-light: #F5F9FF;
                    --white: #FFFFFF;
                    --text-primary: #333333;
                }

                .header {
                    background-color: var(--primary-blue);
                    padding: 1rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                }

                .header-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 20px;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                    color: var(--white);
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                .logo:hover {
                    color: var(--background-light);
                }

                .logo-icon {
                    font-size: 1.8rem;
                }

                @media (max-width: 768px) {
                    .header-content {
                        padding: 0 1rem;
                    }

                    .logo {
                        font-size: 1.2rem;
                    }

                    .logo-icon {
                        font-size: 1.5rem;
                    }
                }
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
}

customElements.define('app-header', AppHeader);