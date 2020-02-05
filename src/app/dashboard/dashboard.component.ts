import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('optNew', { static: false })
  private optNew: MatListOption;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.optNew._setSelected(true);
    });
  }

  messageMenuClick(message: string) {
    alert(message);
  }

}
