import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private service :NewsapiserviceService) { }

  news:any =[]
  ngOnInit(): void {
    this.service.businessnews().subscribe((result)=>{
     this.news = result.articles;
    })
  }

}
