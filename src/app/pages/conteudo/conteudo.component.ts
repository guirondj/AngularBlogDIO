import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  conteudoFoto:string = "https://s2-techtudo.glbimg.com/wATd3neKBag-e4TWKaYvvn-h_qw=/0x0:695x401/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/N/3/a5QNA0TG2CyejbEoWnGA/2016-02-01-re-4-amecube.jpg"
  conteudoTitulo:string = ""
  conteudoTexto:string = ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
