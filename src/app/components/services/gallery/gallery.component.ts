import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { Myrange } from '../content/content.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  id !: Myrange
  page : number = 0
  rows : number = 5

  constructor(public s : LanguageService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
        this.id = +params['$id'] as Myrange
    })
  }

  getString() :  any{
    return this.s.getString(`content${this.id}`,'projects').slice(this.page * this.rows, this.rows + (this.page * this.rows))
  }

  changePage(num : number){
    if (this.checkLower(num) || this.checkOver(num))
      return;
    this.page += num
    this.scrollTop()
  }

  checkLower(num : number){
    return this.page + num < 0
  }
  checkOver(num : number){
    return this.page + num >= Math.ceil(this.s.getString(`content${this.id}`,'projects').length / this.rows)
  }
  scrollTop() {
    window.scroll(0, 0);
  }
}
