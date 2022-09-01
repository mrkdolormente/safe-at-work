import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer') drawerRef: MatDrawer;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.drawerRef.toggle();
  }
}
