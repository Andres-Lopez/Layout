import { Component, OnInit } from '@angular/core';
import { faSearch, faHome, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faHome = faHome;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
