import { DOMElements } from './dom-elements';
import { NavbarComponent } from './components/navbar.component';
import { VideoComponent } from './components/video.component';
import { ServiceListComponent } from './components/service-list.component';

let navbar = new NavbarComponent({
    element: <HTMLElement>DOMElements.navbar,
    hamburger: <HTMLElement>DOMElements.hamburger,
    navigation: <HTMLElement>DOMElements.navigation,
});

let video = new VideoComponent({
    element: DOMElements.video,
    playTrigger: DOMElements.play,
    muteTrigger: DOMElements.mute
})

let services = new ServiceListComponent({
    element: DOMElements.services
});

export const AppComponents = {
    navbar: navbar,
    video: video,
    services: services
}