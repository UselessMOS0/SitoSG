import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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
