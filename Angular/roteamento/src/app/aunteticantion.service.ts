import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AunteticantionService {
  acessToken = "suahsuaihdoamoo32o732y6gew8.jsanuasnu"

  constructor() { }

  estaAutenticado():boolean{
   return !!sessionStorage.getItem("access-token")
  }
  login(email: string, senha: string):boolean{
    if(email ==="raian.guilherme@gmail.com" && senha==="123456"){
      sessionStorage.setItem("access-token", this.acessToken);
      return true;
    }
    return false;

  }
  logout(){
    sessionStorage.clear();

  }
}
