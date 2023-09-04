import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{data} from '../../data/data' 

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  conteudoFoto:string = ""
  conteudoTitulo:string = ""
  conteudoTexto:string = ""
  private id:string | null = "0"  

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id =value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = data.filter(article => article.id == id)[0]

    this.conteudoTitulo = result.titulo
    this.conteudoTexto = result.texto
    this.conteudoFoto = result.foto

    
  }

}
