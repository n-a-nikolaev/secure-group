import { DOMElements } from './dom-elements';
import { NavbarComponent } from './components/navbar.component';

let navbar = new NavbarComponent({
    element: <HTMLElement>DOMElements.navbar,
    hamburger: <HTMLElement>DOMElements.hamburger,
    navigation: <HTMLElement>DOMElements.navigation,
});

export const AppComponents = {
    navbar: navbar
}