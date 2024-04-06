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
  max_n !: number

  constructor(public s : LanguageService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
        this.id = +params['$id'] as Myrange
    })
    this.max_n = this.s.getString(`content${this.id}`,'projects').length - 1
    console.log(this.max_n)
    console.log(this.s.getString(`content${this.id}`,'projects')[this.max_n])
  }

  getString() :  any{
    return this.s.getString(`content${this.id}`,'projects').slice(this.page * this.rows, this.rows + (this.page * this.rows))
  }

  getImage(n : number) : any{
    console.log('id = ' ,this.id, 'N = ', n)
    console.log(this.s.getString(`content${this.id}`,'projects'))
    return this.s.getString(`content${this.id}`,'projects')[n]
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
    return this.page + num >= Math.ceil(this.s.getString(`content${this.id}`,'projects').length / (this.rows * 2))
  }
  scrollTop() {
    window.scroll(0, 0);
  }
}
