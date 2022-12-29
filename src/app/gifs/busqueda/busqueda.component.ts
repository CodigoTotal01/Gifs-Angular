import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {


  constructor(private gifsService:GifsService){}
  //seleciconar un elemento de html, puede que no exista este leemnto y no esta inicializado -> epero no cuando esta en nuestro html
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //Operador confianza  -> asegurarnos que lo que retornmos es nullo
 //! indicarle al generico -> que tipo es 
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    //no nullos 
    if(valor.trim().length === 0 ){
      return;
    }
    this.gifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = "";
  }
}
