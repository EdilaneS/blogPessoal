import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

  tema: Tema = new Tema()
  id:number
  constructor(
    private temaService: TemaService,
    private routh: Router,
    private rout: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    let id: number = this.rout.snapshot.params["id"];
    this.findByIdTema(id)

  }

  findByIdTema( id: number){
    this.temaService.getByIdTema(this.id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  btnSim(){
    this.temaService.deleteTema(this.tema.id).subscribe(()=>{
      this.routh.navigate(['/cadastro-tema'])
      this.alert.showAlertSuccess('Tema apagado com sucesso!!!')
    })
  }

  btnNao(){
    this.routh.navigate(['/cadastro-tema'])
  }



}
