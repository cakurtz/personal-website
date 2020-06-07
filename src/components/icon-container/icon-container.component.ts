import { Component, Input } from '@angular/core';

@Component({
	selector: 'icon-container',
	templateUrl: './icon-container.component.html',
	styleUrls: ['./icon-container.component.scss']
})
export class IconContainer {
    @Input() iconName: string
    @Input() iconFileName: string;
}