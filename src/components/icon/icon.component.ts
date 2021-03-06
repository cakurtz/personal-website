import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss']
})
export class Icon implements OnInit {
    @Input() iconName: string;
    @Input() iconFileName: string;
    iconSrcPath: string;
    
    ngOnInit() {
        this.iconSrcPath = "../../assets/icons/" + this.iconFileName;
    }
}