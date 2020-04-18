import { Component, Input, OnInit } from '@angular/core';
import { AboutMeDetailModel, EducationModel, ExperienceModel, VolunteerModel } from 'src/data/models/about-me-detail-model';
import { ABOUT_ME_EXPERIENCE_DETAILS, ABOUT_ME_EDUCATION_DETAILS, ABOUT_ME_VOLUNTEER_DETAILS } from 'src/data/about-me-detail';

@Component({
	selector: 'detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class Detail implements OnInit {
	@Input() detailData: AboutMeDetailModel;

	title: string;
	entries: ExperienceModel[] | EducationModel[] | VolunteerModel[];
	isExperience: boolean;
	isEducation: boolean;
	isVolunteer: boolean;

	ngOnInit() {
		this.title = this.detailData.title;
		this.entries = this.detailData.entries;

		this.isExperience = this.title === ABOUT_ME_EXPERIENCE_DETAILS.title;
		this.isEducation = this.title === ABOUT_ME_EDUCATION_DETAILS.title;
		this.isVolunteer = this.title === ABOUT_ME_VOLUNTEER_DETAILS.title;
	}
}