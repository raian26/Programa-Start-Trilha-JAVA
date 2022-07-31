import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AunteticantionService } from '../aunteticantion.service';

@Component({
  selector: 'app-pagina-protegida',
  templateUrl: './pagina-protegida.component.html',
  styleUrls: ['./pagina-protegida.component.css']
})
export class PaginaProtegidaComponent implements OnInit {

  constructor(private auth:AunteticantionService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    this.router.navigate([""]);
  }

}
