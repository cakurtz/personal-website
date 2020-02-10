import { Component, Input } from '@angular/core';

@Component({
	selector: 'icon-container',
	templateUrl: './icon-container.component.html',
	styleUrls: ['./icon-container.component.scss']
})
export class IconContainer {
    @Input() iconDesc: string
    @Input() iconFileName: string;
}