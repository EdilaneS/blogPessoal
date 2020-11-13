import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: Tema = new Tema()
  idTema: number
  constructor(
    private temaService: TemaService,
    private routh: Router,
    private rout: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    let id: number = this.rout.snapshot.params["id"]
    this.findByIdTema
    
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  salvar(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema)=>{
      this.tema=resp
      this.routh.navigate(['/cadastro-tema'])
      this.alert.showAlertSuccess('Tema Atualizado com sucesso!!')
    })

  }
}
