import { BaseComponentOptions } from './base-component-options.interface';

export interface VideoPlayerOptions extends BaseComponentOptions {
    playTrigger: HTMLElement,
    muteTrigger: HTMLElement
}