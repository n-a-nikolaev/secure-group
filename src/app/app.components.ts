import { DOMElements } from './dom-elements';
import { NavbarComponent } from './components/navbar.component';
import { VideoComponent } from './components/video.component';
import { ServiceListComponent } from './components/service-list.component';
import { Accordion } from './components/accordion.component';

// Navbar Component
let navbar = new NavbarComponent({
    element: <HTMLElement>DOMElements.navbar,
    hamburger: <HTMLElement>DOMElements.hamburger,
    navigation: <HTMLElement>DOMElements.navigation,
});


// Video in Hero Section
let heroVideo = new VideoComponent({
    element: DOMElements.video,
    playTrigger: DOMElements.play,
    muteTrigger: DOMElements.mute
})

// Services List
let services = new ServiceListComponent({
    element: DOMElements.services
});

// Video in FAQ Section
let faqVideo = new VideoComponent({
    element: DOMElements.faqVideo,
    playTrigger: DOMElements.faqVideoPlay,
});

// Accordion Component
let accordion = new Accordion({
    element: DOMElements.accordion
});

export const AppComponents = {
    navbar: navbar,
    heroVideo: heroVideo,
    services: services,
    faqVideo: faqVideo,
    accordion: accordion
}