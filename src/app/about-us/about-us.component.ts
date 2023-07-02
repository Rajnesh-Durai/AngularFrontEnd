import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var content = document.querySelector('.content');
      var content1=document.querySelector('.content1')
      function isElementInView(el:any) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
      function handleScroll() {
        if (isElementInView(content)) {
          content?.classList.add('show');
        }
      }
      function handleScroll1() {
        if (isElementInView(content1)) {
          content1?.classList.add('show');
        }
      }
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      window.addEventListener('scroll', handleScroll1);
      handleScroll1(); 
    });
    
  }

}
