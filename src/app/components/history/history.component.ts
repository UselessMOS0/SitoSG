import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor (public s : LanguageService) {

  }
}
