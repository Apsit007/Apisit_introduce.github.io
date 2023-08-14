import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  sectionsToAnimate = ['.summary', '.experience', '.education', '.skills'];
  ngOnInit(): void {
    this.animateOnScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    this.sectionsToAnimate.forEach(sectionSelector => {
      const elements = document.querySelectorAll(sectionSelector);
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isElementVisible = elementTop <= window.innerHeight && elementBottom >= 0;

        if (isElementVisible) {
          element.classList.add('is-visible');
        }
      });
    });
  }
}
