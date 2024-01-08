import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

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
}
