import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Register', url: '/folder/Outbox', icon: 'person' },
    { title: 'Login', url: '/folder/Favorites', icon: 'log-in' },
    { title: 'Add Project', url: '/folder/Archived', icon: 'add' },
    { title: 'View Project', url: '/folder/Trash', icon: 'eye' },
    { title: 'Search', url: '/folder/Trash', icon: 'search' },
    { title: 'About Us', url: '/folder/Trash', icon: 'information-circle' },
    { title: 'Contact Us', url: '/folder/Trash', icon: 'call' },
    { title: 'Logout', url: '/folder/Spam', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
