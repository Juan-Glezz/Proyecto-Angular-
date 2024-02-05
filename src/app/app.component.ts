import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  // template: `<h1>hola<h1>`,
  styleUrl: './app.component.css'
  // styles:`
  // h1{color: red}`,
})
export class AppComponent {
  title = 'ProyectoAngular';
  Text= 'I.. am.. atomic..';
  Name = 'Shadow';
}
