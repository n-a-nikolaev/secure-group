import { NavbarOptions } from '../types/navbar-options.interface';
import { MenuExpander } from './menu-expander';

export class NavbarComponent {
    private hamburgerActiveClass: string = 'is-active';
    private mobileNavActiveClass: string = 'opened';
    private navItemClass: string = 'nav-item';
    private dropdownMenuClass: string = 'dropdown-menu';

    private element: HTMLElement;
    private hamburger: HTMLElement;
    private navigation: HTMLElement;

    constructor(options: NavbarOptions) {
        this.element = <HTMLElement>options.element;
        this.hamburger = options.hamburger;
        this.navigation = options.navigation;
    }

    public init(): void {
        this.initEvents();
        this.initDropdownsInNav();
    }

    /**
     * @description
     * Initialize component events
     * 
     * @private
     * 
     * @memberOf NavbarComponent
     */
    private initEvents() {
        this.hamburger.addEventListener('click', this.onHamburgerClickHandler.bind(this), false);
    }

    /**
     * @description
     * Hamburger button click handler
     * Toggle visibility of mobile navigation
     * 
     * @private
     * 
     * @memberOf NavbarComponent
     */
    private onHamburgerClickHandler(): void {
        let active = this.hamburger.classList.contains(this.hamburgerActiveClass);

        if (active) {
            this.hamburger.classList.remove(this.hamburgerActiveClass);
            this.navigation.classList.remove(this.mobileNavActiveClass);
        } else {
            this.hamburger.classList.add(this.hamburgerActiveClass);
            this.navigation.classList.add(this.mobileNavActiveClass);
        }
    }

    private initDropdownsInNav() {
        let component = this;
        let navItems = this.navigation.getElementsByClassName(this.navItemClass);
        [].forEach.call(navItems, function (item: HTMLElement) {
            if (component.checkForNestedMenu(item)) {
                let expander = new MenuExpander(<HTMLElement>item.getElementsByClassName(component.dropdownMenuClass)[0]);
                item.appendChild(expander.getElement());
            }
        });
    }

    /**
     * @description
     * Check if navigation item contains dropdown menu
     * 
     * @private
     * @param {HTMLElement} element - navigation item ( <li> )
     * @returns {boolean}
     * 
     * @memberOf NavbarComponent
     */
    private checkForNestedMenu(element: HTMLElement): boolean {
        let component = this;
        let children = element.children;
        let check: boolean = false;

        if (children.length == 0) {
            return false;
        }
        [].forEach.call(children, function (child: HTMLElement) {
            if (child.classList.contains(component.dropdownMenuClass)) {
                check = true;
            }
        });
        return check;
    }

}