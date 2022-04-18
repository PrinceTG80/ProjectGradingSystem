import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Register', url: '/register', icon: 'person' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Add Project', url: '/homepage/add-project', icon: 'add' },
    { title: 'View Project', url: '/homepage', icon: 'eye' },
    { title: 'Search', url: '/folder/Trash', icon: 'search' },
    { title: 'About Us', url: '/aboutus', icon: 'information-circle' },
    { title: 'Contact Us', url: '/contactus', icon: 'call' },
    { title: 'Logout', url: '/folder/Spam', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
