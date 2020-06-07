import { Component, OnInit } from '@angular/core';
import { FileRetrievalService } from '../../app/file-retrieval.service';
import { Constants } from 'src/app/constants';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TravelModalComponent } from '../travel-modal/travel-modal.component';

@Component({
  selector: 'gallery-bar',
  templateUrl: './gallery-bar.component.html',
  styleUrls: ['./gallery-bar.component.scss']
})
export class GalleryBar implements OnInit {
  title = 'gallery-bar';
  imagePath = 'images/';
  iconPath = 'icons/';
  imageEnding = ".jpeg";
  barLength: number;
  urlPaths: String[];
  categoryNames: String[];
  iconPaths: String[];
  iconMap: Map<String, String[]>;
  iconMapKeys;

  constructor(public matDialog: MatDialog, private fileRetrievalService: FileRetrievalService) {}

  ngOnInit() {
    this.iconMap = new Map();
    this.categoryNames = [];
    this.iconPaths = [];

    this.fileRetrievalService.getS3ObjectList('images/').then(result => {
      this.barLength = result.length;
      this.urlPaths = this.extractUrlPath(result);
      this.extractCategoryNames();
    });
  }

  private extractUrlPath(data: any): String[] {
    const urls: String[] = [];
    for (const entry of data) {
      urls.push(entry.Key);
    }
    return urls;
  }

  private extractCategoryNames() {
    const constants = new Constants;
    var currentPath: String = "";
    var currentCategory: String = "";
    for (const path of this.urlPaths) {
      if (path.match(/^images\/[A-z]+\/$/)) {
        const splitName: String[] = path.split("/");
        currentCategory = splitName[1];
        this.categoryNames.push(currentCategory);
        this.iconMap.set(currentCategory, []);
        currentPath = path;
      } 
      if (path.startsWith(currentPath + this.iconPath) && path.endsWith(this.imageEnding)) {
        const categoryValues = this.iconMap.get(currentCategory);
        categoryValues.push(constants.baseUrl + path);
      }
    }
    this.iconMapKeys = this.iconMap.keys();
  }

  private extractIconsForCategory(category: String) {
    const mapIconPaths = [];
    for (const path of this.urlPaths) {
      if (path.match(/^images\/[A-z]+\/icons\/.+\.jpeg$/)) {
        this.iconPaths.push(path);
        mapIconPaths.push(path);
      }
    }
    this.iconMap.set(category, mapIconPaths);
  }

  getIcons(category: String) {
    return this.iconMap.get(category);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "travel-modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(TravelModalComponent, dialogConfig);
  }
}