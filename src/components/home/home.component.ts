import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FileRetrievalService } from 'src/app/file-retrieval.service';
import { Constants } from 'src/app/constants';


@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
	bannerImageLink: string;
	aboutMeImageLink: string;
	params: object;
	style: object;

	constructor (private fileRetrievalService: FileRetrievalService) {}

	ngOnInit() {
		const constants = new Constants;
		const s3Objects = this.fileRetrievalService.getS3ObjectList('assets/').then(result => {
			for (const entry of result) {
				const path = entry.Key;
				if (path.match(/^assets\/about-me.jpg$/)) {
					this.aboutMeImageLink = constants.baseUrl + path;
				} else if (path.match(/^assets\/banner-background.jpg$/)) {
					this.bannerImageLink = constants.baseUrl + path;
				}
			}
		});
		// this.aboutMeImageLink = 
		this.setupParticleJsParams();
	}

	ngAfterViewInit() {
		// setTimeout(function() {
		// 	const firstElement = document.getElementsByClassName("banner-text");
		// 	firstElement.item(0).innerHTML += "H";
		// 	firstElement.item(0).innerHTML += "e";
		// 	firstElement.item(0).innerHTML += "l";
		// 	firstElement.item(0).innerHTML += "l";
		// 	firstElement.item(0).innerHTML += "o";
		// 	firstElement.item(0).innerHTML += "!";
		// 	// const firstElement = document.getElementsByClassName("banner-first");
		// 	// firstElement.item(0).setAttribute("style", "opacity: 1;");
		// 	setTimeout(function() {
		// 		firstElement.item(0).innerHTML = "Hello! Welcome to my website!";
		// 		setTimeout(function() {
		// 			firstElement.item(0).innerHTML = "Hello! Welcome to my website! My name is Coty Kurtz.";
		// 		}, 1600);
		// 	}, 2000);
		// }, 2000);
	}

	private setupParticleJsParams() {
		this.params = {
			particles: {
				number: {
					value: 100,
				},
				color: {
					value: '#ffffff'
				}
			}
		};
		this.style = {
			'position': 'fixed',
			'width': '100%',
			'height': '100%',
			'z-index': -1,
			'top': 0,
			'left': 0,
			'right': 0,
			'bottom': 0
		};
	}
}
