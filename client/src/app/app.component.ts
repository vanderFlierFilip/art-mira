import { IArtClass } from './models/art-class';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'art-mira';
  classes: IArtClass[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/art-classes').subscribe((response: IArtClass[]) => {
      this.classes = response;
    }, error => console.log(error));
  }
}
