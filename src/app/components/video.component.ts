import { VideoPlayerOptions } from '../types/video-player-options.interface';
import { DOMElements } from '../dom-elements';

const playIcons: any = {
    on: 'icon-play',
    off: 'icon-pause'
}

const soundIcons: any = {
    on: 'icon-sound',
    off: 'icon-mute'
}

export class VideoComponent {
    private player: VideoJSPlayer;
    private element: HTMLElement;
    private playTrigger: HTMLElement;
    private muteTrigger: HTMLElement;

    private isPlaying: boolean = false;
    private isMuted: boolean = false;

    constructor(options: VideoPlayerOptions) {
        this.element = options.element;
        this.playTrigger = options.playTrigger;
        this.muteTrigger = options.muteTrigger;
    }

    public init() {
        this.player = videojs(this.element).ready(() => {
            this.player.on('play', () => {
                if (!DOMElements.body.classList.contains(`${this.element.getAttribute('data-video-section')}-video-played`)) {
                    DOMElements.body.classList.add(`${this.element.getAttribute('data-video-section')}-video-played`);
                }
            })
        });
        this.initEvents();
    }

    /**
     * @description
     * Initialize component events
     * 
     * @private
     * 
     * @memberOf VideoComponent
     */
    private initEvents(): void {
        this.playTrigger.addEventListener('click', this.togglePlay.bind(this), false);
        this.muteTrigger && this.muteTrigger.addEventListener('click', this.toggleSound.bind(this), false);
    }

    /**
     * @description
     * Click event handler for play button
     * 
     * @private
     * 
     * @memberOf VideoComponent
     */
    private togglePlay(): void {
        this.toggleIcon(this.playTrigger, this.isPlaying, playIcons);
        this.isPlaying = !this.isPlaying;
        this.isPlaying ? this.player.play() : this.player.pause();
    }

    /**
     * @description
     * Click event handler for mute button
     * 
     * @private
     * 
     * @memberOf VideoComponent
     */
    private toggleSound(): void {
        this.toggleIcon(this.muteTrigger, this.isMuted, soundIcons);
        this.isMuted = !this.isMuted;
        this.isMuted ? this.player.volume(0) : this.player.volume(100);
    }

    /**
     * @description
     * Video player controll icon toggle
     * 
     * @private
     * @param {HTMLElement} element - video icon element
     * @param {boolean} flag - flag to check what icon to apply
     * @param {*} iconClassObj - object with icon states
     * 
     * @memberOf VideoComponent
     */
    private toggleIcon(element: HTMLElement, flag: boolean, iconClassObj: any): void {
        if (flag) {
            element.getElementsByTagName('i')[0].classList.remove(iconClassObj['off'])
            element.getElementsByTagName('i')[0].classList.add(iconClassObj['on'])
        } else {
            element.getElementsByTagName('i')[0].classList.remove(iconClassObj['on'])
            element.getElementsByTagName('i')[0].classList.add(iconClassObj['off'])
        }
    }
}