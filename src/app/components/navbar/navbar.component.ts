import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

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
}
