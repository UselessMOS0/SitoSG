import { Injectable } from '@angular/core';
import { Language, Lines } from 'src/assets/languages';
type cats = (typeof Lines)[Language.ITALIAN];
export type str = keyof cats;

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: Language = Language.ITALIAN;
  n!: typeof Lines;
  getString<T extends str>(category: T, name: keyof cats[T]) {
    return Lines[this.language][category][name];
  }
  changeLang() {
    this.language =
      this.language == Language.ITALIAN ? Language.ENGLISH : Language.ITALIAN;
  }
}
