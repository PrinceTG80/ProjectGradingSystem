import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  myPostCategories = ['IT','Software','Hardware','Professional','Mixed'];

  postData = {
    subcategory: 'SUBCATEGORY',
    category: 'CATEGORY',
    title: 'TITLE',
    range: '10',
    description: 'DESCRIPTION',
    status: 'pending',
    date: 'date',
    expiryDate: 'expiry',
    time: 'time',
    attachments: {
      image: '../assets/images/img.jpg',
      camera: '',
      audio: '',
      document: '',
    },
    minLat: 0,
    maxLat: 0,
    minLong: 0,
    maxLong: 0,
    userName: 'Tushar',
  };

  myPost = [this.postData,this.postData,this.postData,this.postData];

  myPostId = [this.postData,this.postData,this.postData,this.postData];

}
