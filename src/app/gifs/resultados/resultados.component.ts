import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

//Se purga la memoria por eso perdems los datos de nuestro servicio des de los lnavegadores web
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {
  
  constructor(private gifsService:GifsService){}


  //!propeidad de la clase ->  los get -> facilitan el acceso en el html
  get resultados(): Gif[]{
    return this.gifsService.resultados;
  }

}
