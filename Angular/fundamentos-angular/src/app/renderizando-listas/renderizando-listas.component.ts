import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {
celulares: Celular[]=[
  {id:1, nome:"Xiomi", descricao:"celular novo", esgotado:false},
  {id:2, nome:"Iphone", descricao:"lançamento", esgotado:true},
  {id:3, nome:"Samsung", descricao:"celular quebrado", esgotado:false},
  {id:4, nome:"Pixel 4", esgotado:false}
]
}
