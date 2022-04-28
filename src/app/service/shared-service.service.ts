import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  public projects = [];

  public grade = 0;

  public reportFract = [];
  public reportLabel = [];

  registerData = {
    name: 'UserName',
    email: 'mail',
    pwd: 'Pass@123'
  }

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

  status = ["pending","started","completed"];

  myPost = [this.postData,this.postData,this.postData,this.postData];

  myPostId = [this.postData,this.postData,this.postData,this.postData];

  addTimes (startTime, endTime) {
    var times = [ 0, 0, 0 ]
    var max = times.length
  
    var a = (startTime || '').split(':')
    var b = (endTime || '').split(':')
  
    // normalize time values
    for (var i = 0; i < max; i++) {
      a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
      b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    }
  
    // store time values
    for (var i = 0; i < max; i++) {
      times[i] = a[i] + b[i]
    }
  
    var hours = times[0]
    var minutes = times[1]
    var seconds = times[2]
  
    if (seconds >= 60) {
      var m = (seconds / 60) << 0
      minutes += m
      seconds -= 60 * m
    }
  
    if (minutes >= 60) {
      var h = (minutes / 60) << 0
      hours += h
      minutes -= 60 * h
    }
  
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
  }
}
