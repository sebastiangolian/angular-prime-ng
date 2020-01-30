import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {

  posts: any[]
  renderedPosts: any[]
  cols: any[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts").subscribe(
      (posts) => {
        this.posts = posts
        this.renderedPosts = this.posts.filter((value, index) => { return index < 10 })
      }
    )

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' },
    ];
  }


  paginate(event) {
    console.log(event)
    this.renderedPosts = this.posts.filter((value, index) => { 
      return index < event.first+event.rows && index >= event.first
    })
  }

}
