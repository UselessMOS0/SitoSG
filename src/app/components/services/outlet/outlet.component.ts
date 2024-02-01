
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss']
})
export class OutletComponent implements OnInit{
  constructor(private route: ActivatedRoute,private router : Router){
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      if (!['1','2','3','4','5'].includes(params['$id'])){
        this.router.navigate(['services'])
      } 
  });
  }

}

