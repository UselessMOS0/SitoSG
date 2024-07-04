import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { LanguageService } from 'src/app/language.service';

export type Myrange = 1 | 2 | 3 | 4 | 5;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements AfterViewInit {
  id!: Myrange;

  projects!:any;
  currentImage: string = '';
  nextImage: string = '';

  @ViewChild('current') currentImg!: ElementRef<HTMLImageElement>;

  subscription!: Subscription;

  

  updateCarousel() {
    const proj = this.projects[Math.floor(Math.random() * this.projects.length)].thumbnail;
    const source = interval(5);
    let animationSubscr!: Subscription;

    animationSubscr = source.subscribe((v) => {
      const originalOp = this.currentImg.nativeElement.style.opacity;
      let op = originalOp.trim() === '' ? 1 : parseFloat(originalOp);
      op -= 0.01;
      this.currentImg.nativeElement.style.opacity = op.toString();
      if (op <= 0) {
        this.currentImage = this.nextImage;
        console.log(this.currentImage)
        // @ts-ignore
        this.nextImage = proj;
        this.currentImg.nativeElement.style.opacity = '1';
        animationSubscr.unsubscribe();
      }
    });
  }

  loadInitialImages() {
    this.projects = this.s.getString(`content${this.id}`, 'projects');
    this.currentImage =
      // @ts-ignore
      this.projects[Math.floor(Math.random() * this.projects.length)].thumbnail;
    this.nextImage =
      // @ts-ignore
      this.projects[Math.floor(Math.random() * this.projects.length)].thumbnail;
  }

  ngAfterViewInit(): void {
    this.createInterval();
  }

  constructor(public s: LanguageService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = +params['$id'] as Myrange;
      this.loadInitialImages();
    });
  }

  createInterval() {
    const source = interval(5000);
    this.subscription = source.subscribe((v) => this.updateCarousel());
  }

  getTitle() {
    return this.s.getString(`content${this.id}`, 'title') as string;
  }

  getText() {
    let str = this.s.getString(`content${this.id}`, 'text') as string;

    return str.split('/n');
  }

  scrollTop() {
    window.scroll(0, 0);
  }
  shuffle(array: any) {
    let sorted = [...array].sort(() => Math.random() - 0.5);
    return sorted;
  }
}
