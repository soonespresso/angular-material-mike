import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  progress = 85;
  strokeWidth = 1;
  diameter = 100;

  post$: Observable<any>;

  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.post$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(post => {
      return post.slice(0, 6);
    }));

    this.dialog.afterAllClosed.subscribe(() => {
      console.log('Dialog closed');
    });

    this.dialog.afterOpen.subscribe((dialogRef: MatDialogRef<any>) => {
      console.log(`Dialog ${ dialogRef.id } open`);
      console.log(`openDialogs's length is ${ this.dialog.openDialogs.length }`);
    });
  }

  showAddPostDialog() {
    this.dialog.open(AddPostDialogComponent, { hasBackdrop: false });
  }
}
