export class MenuExpander {
    private element: HTMLElement = document.createElement('button');
    private dropdownActiveClass = 'active';
    private active: boolean = false;

    constructor(private dropdown: HTMLElement) {
        this.setButtonAttributes();
        this.initEvents();
    }

    /**
     * @description
     * Get expander DOM element
     * 
     * @returns {HTMLElement}
     * 
     * @memberOf MenuExpander
     */
    public getElement(): HTMLElement {
        return this.element;
    }

    /**
     * @description
     * Set element attributes 
     * 
     * @private
     * 
     * @memberOf MenuExpander
     */
    private setButtonAttributes() {
        this.element.classList.add('btn-expander');
        this.element.innerHTML = '+';
    }

    /**
     * @description
     * Initialize component events
     * 
     * @private
     * 
     * @memberOf MenuExpander
     */
    private initEvents(): void {
        this.element.addEventListener('click', this.toggleDropdown.bind(this), false);
    }

    /**
     * @description
     * Toggle dropdown menu
     * show dropdown menu and change button text
     * according to it's state
     * 
     * @private
     * 
     * @memberOf MenuExpander
     */
    private toggleDropdown(): void {
        this.active ? this.dropdown.classList.remove(this.dropdownActiveClass) : this.dropdown.classList.add(this.dropdownActiveClass);
        this.active = !this.active;
        this.element.innerHTML = this.active ? '-' : '+';
    }
}