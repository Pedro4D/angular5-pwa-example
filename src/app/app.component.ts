import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'app';
  public people: Array<any>;

  
  ngOnInit() {
    this.getPeople();
  }

  /**
   * Method to call the sw api
   */
  getPeople() {
    this.http.get('https://swapi.co/api/people/', { })
    .subscribe(
      response  => {
        this.people = response["results"] ;
        console.log(this.people);
      },
      error => {
          console.log(error);
      },
      () => {
        console.log('call finished');
      }
    );
  }
}
