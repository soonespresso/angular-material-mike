import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('optNew', { static: false })
  optNew: MatListOption;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.optNew._setSelected(true);
    });
  }
}
