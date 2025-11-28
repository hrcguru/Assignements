// Vanilla JavaScript DOM manipulation demo

class VanillaDOMDemo {
    constructor() {
        this.updateCount = 0;
        this.domUpdateCount = 0;
        this.initializeElements();
        this.setupMutationObserver();
        this.bindEvents();
    }

    initializeElements() {
        this.vanillaTitle = document.getElementById('vanillaTitle');
        this.updateButton = document.getElementById('updateButton');
        this.updateCountElement = document.getElementById('updateCount');
        this.domUpdateCountElement = document.getElementById('domUpdateCount');
    }

    setupMutationObserver() {
        // Observer to track actual DOM updates
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    this.domUpdateCount++;
                    this.updateDOMCounter();
                }
            });
        });

        // Observe the title element for changes
        if (this.vanillaTitle) {
            this.observer.observe(this.vanillaTitle, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }
    }

    bindEvents() {
        if (this.updateButton) {
            this.updateButton.addEventListener('click', () => {
                this.handleTitleUpdate();
            });
        }
    }

    handleTitleUpdate() {
        // Direct DOM manipulation
        this.updateCount++;
        this.vanillaTitle.textContent = `Vanilla Title Updated ${this.updateCount} (${new Date().toLocaleTimeString()})`;
        
        // Update counter display
        this.updateCounter();
    }

    updateCounter() {
        if (this.updateCountElement) {
            this.updateCountElement.textContent = this.updateCount;
        }
    }

    updateDOMCounter() {
        if (this.domUpdateCountElement) {
            this.domUpdateCountElement.textContent = this.domUpdateCount;
        }
    }
}

// Initialize the demo when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VanillaDOMDemo();
});