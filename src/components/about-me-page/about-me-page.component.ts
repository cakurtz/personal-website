import { Component, OnInit } from '@angular/core';
import { AboutMeDetailModel } from 'src/data/models/about-me-detail-model';
import { ABOUT_ME_EDUCATION_DETAILS, ABOUT_ME_EXPERIENCE_DETAILS, ABOUT_ME_VOLUNTEER_DETAILS } from 'src/data/about-me-detail';
import { IconModel } from 'src/data/models/about-me-icon-model';
import { ABOUT_ME_ICON_MODEL } from 'src/data/about-me-icons';

@Component({
	selector: 'about-me-page',
	templateUrl: './about-me-page.component.html',
	styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePage implements OnInit {
	educationDetails: AboutMeDetailModel;
	experienceDetails: AboutMeDetailModel;
	volunteerDetails: AboutMeDetailModel;
	iconData: IconModel[];

	ngOnInit() {
		this.educationDetails = ABOUT_ME_EDUCATION_DETAILS;
		this.experienceDetails = ABOUT_ME_EXPERIENCE_DETAILS;
		this.volunteerDetails = ABOUT_ME_VOLUNTEER_DETAILS;
		this.iconData = ABOUT_ME_ICON_MODEL;
	}
}
