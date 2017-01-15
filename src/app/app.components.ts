import { DOMElements } from './dom-elements';
import { NavbarComponent } from './components/navbar.component';
import { VideoComponent } from './components/video.component';

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

export const AppComponents = {
    navbar: navbar,
    video: video
}