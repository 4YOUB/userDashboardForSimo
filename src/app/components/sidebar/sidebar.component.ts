import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }


  toggleNavbar(elem:HTMLElement,show:HTMLElement,close:HTMLElement){
    document.body.querySelector('app-sidebar')?.classList.toggle('translate-x-[-90%]')
    elem.classList.toggle('translate-x-[-100%]')
    close.classList.toggle('hidden')
    show.classList.toggle('hidden')
  }


  ngOnInit(): void {
  }

}
