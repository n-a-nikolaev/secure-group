import { BaseComponentOptions } from '../types/base-component-options.interface';
import { ListServicesTemplate } from '../templates/list-services.template';
import { AppHelper } from '../app.helpers';

export class ServiceListComponent {
    private element: HTMLElement;
    private buttonMoreClass: string = 'service-box--button';
    private services: any[] = [
        {
            id: 100,
            icon: 'icon-tools',
            title: 'Development',
            shortDescription: 'Every website needs the right environment if it plans to be successful',
            fullDescription: 'Duis aliquip nisi veniam esse ut minim sunt ad qui consectetur. Aute elit eu duis excepteur do anim aliquip ea veniam. Eu nisi duis est cupidatat labore eiusmod excepteur. Esse non cillum sint qui dolore duis est pariatur commodo nisi nulla.Ut id eu aliquip amet anim cupidatat est est duis cillum cillum mollit. Ea consequat cupidatat velit exercitation amet exercitation. Ea ea cillum amet elit minim laborum elit ullamco aliqua do sit minim. Dolore incididunt ex sint aliquip ea fugiat tempor.'
        },
        {
            id: 101,
            icon: 'icon-brush',
            title: 'UI/UX',
            shortDescription: 'Every website needs the right environment if it plans to be successful',
            fullDescription: 'Duis aliquip nisi veniam esse ut minim sunt ad qui consectetur. Aute elit eu duis excepteur do anim aliquip ea veniam. Eu nisi duis est cupidatat labore eiusmod excepteur. Esse non cillum sint qui dolore duis est pariatur commodo nisi nulla.Ut id eu aliquip amet anim cupidatat est est duis cillum cillum mollit. Ea consequat cupidatat velit exercitation amet exercitation. Ea ea cillum amet elit minim laborum elit ullamco aliqua do sit minim. Dolore incididunt ex sint aliquip ea fugiat tempor.'
        },
        {
            id: 102,
            icon: 'icon-megaphone',
            title: 'Social Marketing',
            shortDescription: 'Every website needs the right environment if it plans to be successful',
            fullDescription: 'Duis aliquip nisi veniam esse ut minim sunt ad qui consectetur. Aute elit eu duis excepteur do anim aliquip ea veniam. Eu nisi duis est cupidatat labore eiusmod excepteur. Esse non cillum sint qui dolore duis est pariatur commodo nisi nulla.Ut id eu aliquip amet anim cupidatat est est duis cillum cillum mollit. Ea consequat cupidatat velit exercitation amet exercitation. Ea ea cillum amet elit minim laborum elit ullamco aliqua do sit minim. Dolore incididunt ex sint aliquip ea fugiat tempor.'
        },
        {
            id: 103,
            icon: 'icon-address',
            title: 'System Architecture',
            shortDescription: 'Every website needs the right environment if it plans to be successful',
            fullDescription: 'Duis aliquip nisi veniam esse ut minim sunt ad qui consectetur. Aute elit eu duis excepteur do anim aliquip ea veniam. Eu nisi duis est cupidatat labore eiusmod excepteur. Esse non cillum sint qui dolore duis est pariatur commodo nisi nulla.Ut id eu aliquip amet anim cupidatat est est duis cillum cillum mollit. Ea consequat cupidatat velit exercitation amet exercitation. Ea ea cillum amet elit minim laborum elit ullamco aliqua do sit minim. Dolore incididunt ex sint aliquip ea fugiat tempor.'
        },
        {
            id: 104,
            icon: 'icon-book-open',
            title: 'Copywriting',
            shortDescription: 'Every website needs the right environment if it plans to be successful',
            fullDescription: 'Duis aliquip nisi veniam esse ut minim sunt ad qui consectetur. Aute elit eu duis excepteur do anim aliquip ea veniam. Eu nisi duis est cupidatat labore eiusmod excepteur. Esse non cillum sint qui dolore duis est pariatur commodo nisi nulla.Ut id eu aliquip amet anim cupidatat est est duis cillum cillum mollit. Ea consequat cupidatat velit exercitation amet exercitation. Ea ea cillum amet elit minim laborum elit ullamco aliqua do sit minim. Dolore incididunt ex sint aliquip ea fugiat tempor.'
        },
        {
            id: 105,
            icon: 'icon-camera',
            title: 'Photography',
            shortDescription: 'Every website needs the right environment if it plans to be successful',
            fullDescription: 'Duis aliquip nisi veniam esse ut minim sunt ad qui consectetur. Aute elit eu duis excepteur do anim aliquip ea veniam. Eu nisi duis est cupidatat labore eiusmod excepteur. Esse non cillum sint qui dolore duis est pariatur commodo nisi nulla.Ut id eu aliquip amet anim cupidatat est est duis cillum cillum mollit. Ea consequat cupidatat velit exercitation amet exercitation. Ea ea cillum amet elit minim laborum elit ullamco aliqua do sit minim. Dolore incididunt ex sint aliquip ea fugiat tempor.'
        },
    ]

    constructor(options: BaseComponentOptions) {
        this.element = options.element;
    }

    public init() {
        let list = this.createList();
        this.element.innerHTML = list;
        this.initEvents();
    }

    private initEvents(){
        let buttons = this.element.getElementsByClassName(this.buttonMoreClass);
        [].forEach.call(buttons, (btn: HTMLElement) => {
            btn.addEventListener('click', this.onExpandServiceBtnClick, false);
        });
    }

    private onExpandServiceBtnClick(){
        // TODO
        console.log(this);
    }

    private createList(): string {
        let list = AppHelper.templateEngine(ListServicesTemplate, {
            services: this.services
        });
        return list;
    }
}