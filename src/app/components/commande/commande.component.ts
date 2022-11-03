import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  constructor() { }
  @Input() img:string =''
  @Input() type:string = ''
  @Input() count:string = ''

  ngOnInit(): void {
    
  }

}
