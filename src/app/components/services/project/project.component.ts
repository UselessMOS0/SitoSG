import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { Myrange } from '../content/content.component';
import * as $ from 'jquery'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit{
  id !: Myrange
  n_project !: number
  img !: string
  constructor(public s : LanguageService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
        this.id = +params['$id'] as Myrange
        this.n_project = +params['n_project']
        

    })
  }
  ngAfterViewInit(): void {
    this.getImage(0)
  }

  getImage(n : any) {
    this.img = this.getString().images[n]
    this.ani()
  }

  getString() :  any{
    return this.s.getString(`content${this.id}`,'projects')[this.n_project]
  }

  ani() {
    $('#img').removeClass('img');
    $('#img')[0].offsetWidth
    $('#img').addClass('img');
  }
}
