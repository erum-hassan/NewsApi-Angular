import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  news:any =[]
  constructor(private service:NewsapiserviceService) { }

  ngOnInit(): void {
    this.service.sportsnews().subscribe((result)=>{
      this.news= result.articles
    })
  }

}
