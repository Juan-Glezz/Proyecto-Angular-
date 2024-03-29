import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string="Shadow";
  estalogado:boolean=false;
  juegofavorito:string= '';
  saludar():void{
    alert("Hola "+this.username);
  }
  cambiarEstado():void{
    this.estalogado=!this.estalogado;
}
getfavourite(g:string){
  this.juegofavorito=g;
}
}
