class HomeComponent extends HTMLElement {
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
                .home-container {
                    padding: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .hero-section {
                    text-align: center;
                    padding: 40px 20px;
                    background-color: #f5f5f5;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }

                .hero-title {
                    font-size: 2.5em;
                    color: #333;
                    margin-bottom: 15px;
                }

                .hero-subtitle {
                    font-size: 1.2em;
                    color: #666;
                    margin-bottom: 25px;
                }

                .cta-button {
                    padding: 12px 24px;
                    font-size: 1.1em;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .cta-button:hover {
                    background-color: #0056b3;
                }

                .features-section {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    padding: 20px 0;
                }

                .feature-card {
                    padding: 20px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .feature-title {
                    font-size: 1.3em;
                    color: #333;
                    margin-bottom: 10px;
                }

                .feature-description {
                    color: #666;
                    line-height: 1.5;
                }
            </style>

            <div class="home-container">
                <section class="hero-section">
                    <h1 class="hero-title">Welcome to Our Website</h1>
                    <p class="hero-subtitle">Discover amazing features and services</p>
                    <button class="cta-button">Get Started</button>
                </section>

                <section class="features-section">
                    <div class="feature-card">
                        <h2 class="feature-title">Feature 1</h2>
                        <p class="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div class="feature-card">
                        <h2 class="feature-title">Feature 2</h2>
                        <p class="feature-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </div>
                    <div class="feature-card">
                        <h2 class="feature-title">Feature 3</h2>
                        <p class="feature-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    </div>
                </section>
            </div>
        `;

        // Add event listener to the CTA button
        const ctaButton = this.shadowRoot.querySelector('.cta-button');
        ctaButton.addEventListener('click', () => {
            alert('Get Started clicked!');
        });
    }
}

// Define the custom element
customElements.define('home-component', HomeComponent);