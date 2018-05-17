import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Code4Good', cols: 2, rows: 1, content: 'Our goal...' },
    { title: 'Systers', cols: 1, rows: 1 , content: 'Our goal...'},
    { title: 'Mifos', cols: 1, rows: 2 , content: 'Our goal...'},
    { title: 'Contributors', cols: 1, rows: 1 , content: 'List here'}
  ];
}
