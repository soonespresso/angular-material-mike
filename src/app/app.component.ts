import { Component, ViewChild, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(MatRipple, { static: false }) ripple: MatRipple;

  ngOnInit(): void {
    this.ripple.launch(0, 0);
  }

  triggerRipple() {
    const point1 = this.ripple.launch(0, 0, { color: 'pink', centered: true, persistent: true, radius: 50 });
    const point2 = this.ripple.launch(0, 0, { color: 'yellow', centered: true, persistent: true, radius: 20 });

    setTimeout(() => {
      point1.fadeOut();
    }, 500);
  }

  clearRipple() {
    this.ripple.fadeOutAll();
  }
}
