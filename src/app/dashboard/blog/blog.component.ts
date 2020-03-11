import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.post$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(post => {
      return post.slice(0, 6);
    }));
  }

}
