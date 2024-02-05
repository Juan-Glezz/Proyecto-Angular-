import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      Componente de Comnetarios
    </p>
    <img src="https://i.blogs.es/5382dc/death-star/1366_2000.jpg">
    <p>La Estrella de la Muerte fue el arma máxima del Imperio: una estación espacial de tamaño lunar con la capacidad de destruir un planeta entero. Pero el Emperador y los oficiales imperiales subestimaron la tenacidad de la Alianza Rebelde, quienes se negaron a someterse a este terror tecnológico</p>
 `,
  styles: `
    img {
      width:100%;
      height:auto;
    }
  `
})
export class CommentsComponent {

}
