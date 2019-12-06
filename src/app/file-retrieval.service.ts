import { Injectable } from '@angular/core';

declare const AWS: any;

// var S3 = require('aws-sdk/clients/s3');

@Injectable({
  providedIn: 'root'
})
export class FileRetrievalService {
  s3: any;
  params: object;

  constructor() { 
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:5bac0054-a95b-4b59-931d-7e1b052023c6',
    });

    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: "www.cotykurtz.com"}
    });
  }

  getS3ObjectList(prefix: string): Promise<any> {
    this.params = {
      Prefix: prefix
    };
    return new Promise((resolve, reject) => {
      this.s3.listObjects(this.params, function(err, data) {
        if (err) {
          console.log(err);
          reject();
        } else {
          console.log(data);
          console.log(data.Contents.length);
          resolve(data.Contents);
        }
      });
    })
  }
}
