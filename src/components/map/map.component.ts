import { Component, AfterViewInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { MatDialog } from '@angular/material/dialog';
import { mapData } from './map-modal-data';

@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
    map;
    visitedColorCode = "#3C79A1";
    hoverColorCode = "#B5A642";

    constructor(private zone: NgZone, public matDialog: MatDialog) {}

	ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;

    // map.projection = new am4maps.projections.Orthographic();

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ["AQ"];
    polygonSeries.data = [{
      "id": "US",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "MX",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "BZ",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "KY",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "CR",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "DK",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "HU",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "SE",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "NL",
      "fill": am4core.color(this.visitedColorCode)
    }, {
      "id": "GR",
      "fill": am4core.color(this.visitedColorCode)
    }]; 
    map.series.push(polygonSeries);

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    // polygonTemplate.fill = am4core.color("#74B266");
    polygonTemplate.propertyFields.fill = "fill";
    polygonTemplate.events.on("hit", function(ev) {
      ev.target.series.chart.zoomToMapObject(ev.target);
      const country = (ev.target.dataItem.dataContext as any).name;
      for (let entry of mapData) {
        if (entry.name === country) {
          map.openModal(`
            <h2 style='margin-top: 0px;'>${entry.name}</h2>
            <div style='display: flex; align-items: center; max-width: 550px;'>
              <img src='${entry.imagePath}' style='max-width: 300px;'>
              <div style='margin-left: 35px;'>
                <p>Date: ${entry.date}</p>
                <p style='margin-top: 35px;'>Cities Visited: ${entry.cities}</p>
              </div>
            </div>
            <p style='max-width: 550px; margin-top: 35px;'>${entry.description}</p>
          `);
          break;
        }
      }
    });

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(this.hoverColorCode);

    // User Interaction - Rotation
    // map.panBehavior = "rotateLongLat";

    // User Interaction - Zoom
    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.slider.height = 100;

    // Background
    map.background.fill = am4core.color("#2B2D2F");
    map.background.fillOpacity = 1;

    // Globe Background
    map.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#2B2D2F");
    // map.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#4f99d7");
    map.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

    this.map = map;
  })
}

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.map) {
        this.map.dispose();
      }
    });
  }
}
