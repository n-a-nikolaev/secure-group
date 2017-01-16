import { DOMElements } from './dom-elements';
import { AppServices } from './app.services';
import { AppComponents } from './app.components';
// app code here...

class App {
    constructor(
        private services: any,
        private components: any
    ) { 
        this.init();
    }

    public init() {
        // Prevent FOUC
        setTimeout(() => {
            DOMElements.body.classList.remove('loading');
        }, 500);
        
        this.components.navbar.init();
        this.components.heroVideo.init();
        this.components.services.init();
    }
}

new App(AppServices, AppComponents);
