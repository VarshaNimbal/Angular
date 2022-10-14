import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  ProductData: any;

  constructor(private client:HttpClient,private route:Router) { }

  ngOnInit(): void {
    const url="https://localhost:44397/api/values";
    this.client.get(url).subscribe(
      Response=>{this.ProductData=Response ,
        console.log(Response);
      },

       err=>{console.log("srevice not found");

      })

  }

}
