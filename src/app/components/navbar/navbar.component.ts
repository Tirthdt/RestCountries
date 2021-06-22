import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  darkmode = true;

  constructor() {}

  ngOnInit(): void {}

  changeTheme() {
    this.darkmode = !this.darkmode;
    document.querySelector('body').classList.toggle('light');
  }
}
