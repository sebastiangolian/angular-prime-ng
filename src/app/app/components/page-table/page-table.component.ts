import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {

  posts: Observable<any[]>
  cols: any[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.posts = this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts");

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' },
  ];
  }

}
