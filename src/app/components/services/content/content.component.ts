import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { LanguageService } from 'src/app/language.service';

export type Myrange = 1 | 2 | 3 | 4 | 5

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent {
  id !: Myrange
  constructor(public s : LanguageService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
        this.id = +params['$id'] as Myrange
    })
  }
  getTitle(){
    return this.s.getString(`content${this.id}`,'title') as string
  }
  getText(){
    let str = this.s.getString(`content${this.id}`,'text') as string
    
    return str.split('/n')
  }
  getProjects():  any {
    if (this.id < 5) {
      return this.shuffle(this.s.getString(`content${this.id}`,'projects'))
    }
    else {
      return this.s.getString(`content${this.id}`,'projects')
    }
    
  }
  scrollTop() {
    window.scroll(0, 0);
  }
  shuffle (array: any) { 
    let sorted = array.sort(() => Math.random() - 0.5); 
    return sorted
}; 
}
