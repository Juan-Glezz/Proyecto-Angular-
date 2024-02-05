import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>Los juegos favoritos de {{nombreUsuario}} son:</p>
    <ul>
      @for( game of games; track game.id ){
        <li (click)="juegoFavorito(game.name)">{{ game.name }}</li>

      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input()  nombreUsuario: string = "Game";
  @Output() comunicadorEveDeHijo= new EventEmitter<string>();
  games= [
    {id:1,
      name: "God of War",},

    {id:1,
      name: "Master of Shadow",},

    {id:1,
      name: "Fortnite",}
  ];
  juegoFavorito(j:string):void{
    alert(`A ${this.nombreUsuario} le gusta jugar a ${j}`)
    this.comunicadorEveDeHijo.emit(j)
  }
}
