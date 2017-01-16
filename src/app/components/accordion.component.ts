import { BaseComponentOptions } from '../types/base-component-options.interface';

const icons: any = {
    expanded: 'icon-cancel-circled',
    collapsed: 'icon-plus-circled'
}

export class Accordion {
    private activeClass: string = 'expanded';
    private items: NodeList;

    public element: HTMLElement;

    constructor(options: BaseComponentOptions) {
        this.element = options.element;
        this.items = this.element.querySelectorAll('.acc-item');
    }

    public init() {
        this.initEvents();
    }

    private initEvents() {
        [].forEach.call(this.items, this.listenForTriggerClick.bind(this), false);
    }

    private listenForTriggerClick(element: Element) {
        let trigger = element.querySelector('.acc-item-trigger');
        trigger.addEventListener('click', this.onTriggerClick.bind(this), false);
    }

    private onTriggerClick(event: Event) {
        let trigger = <HTMLElement>event.target;
        let acc = this;
        let item = <HTMLElement>trigger.parentNode;

        if (item.classList.contains(this.activeClass)) {
            return false;
        }

        this.removeActiveElement();
        this.setActiveItem(item);
    }

    private setActiveItem(item: HTMLElement) {
        let icon = item.getElementsByClassName('acc-item-icon')[0];

        item.classList.add(this.activeClass);
        icon.classList.remove(icons.collapsed);
        icon.classList.add(icons.expanded);
    }

    private removeActiveElement() {
        let active = this.element.getElementsByClassName(this.activeClass)[0];
        if (active) {
            let icon = active.getElementsByClassName('acc-item-icon')[0];

            active.classList.remove(this.activeClass);
            icon.classList.remove(icons.expanded);
            icon.classList.add(icons.collapsed);
        }
    }
}