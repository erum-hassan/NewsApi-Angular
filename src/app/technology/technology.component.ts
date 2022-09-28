import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  
  news:any=[]
  constructor(private service:NewsapiserviceService) { }

  
  ngOnInit(): void {
    this.service.technews().subscribe((result)=>{
      this.news = result.articles
    })
  }

}
