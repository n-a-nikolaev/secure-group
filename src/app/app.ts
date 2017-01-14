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
        setTimeout(() => {
            DOMElements.body.classList.remove('loading');
        }, 1000);
        
        this.components.navbar.init()
    }
}
new App(AppServices, AppComponents);
