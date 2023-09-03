import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  conteudoFoto:string = ""
  @Input()
  conteudoTitulo:string = ""
  @Input()
  conteudoTexto:string = ""
  @Input()
  id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
