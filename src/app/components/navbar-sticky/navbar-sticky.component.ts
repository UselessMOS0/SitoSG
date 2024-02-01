import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar-sticky',
  templateUrl: './navbar-sticky.component.html',
  styleUrls: ['./navbar-sticky.component.scss']
})
export class NavbarStickyComponent {
  constructor(public s: LanguageService) {
    
  }
  scrollTop() {
    window.scroll(0, 0);
  }

  ani(){
    $('#expand-contract').toggleClass('expanded');
    $('#expand-contract').toggleClass('collapsed');
  }
}
