import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
 nome = "Raian";
dataNascimento = "1993-02-26";
urlImagem="/assets/onda-do-bem.jpg";

mostrarData(){
  alert("A data de nascimento é: " +this.dataNascimento);
}

}
