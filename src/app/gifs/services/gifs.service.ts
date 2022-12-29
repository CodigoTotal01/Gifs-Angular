import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';
import { AppModule } from '../../app.module';

//! V4 . servicios definidos en el bundle del de la palicacion -> manera global - no es necesario en los providers -> angular lo eleva a un nivel global 

@Injectable({
  providedIn: 'root'
})


export class GifsService {

  //petiones tipos post -> obserbable -> mayor control 
  constructor(private http: HttpClient){
    //Mejor manera -> si no halla el item -> retorna un arreglo vacio
      this._historial= JSON.parse(localStorage.getItem("historial")!) || [];
      this.resultados = JSON.parse(localStorage.getItem("resultados")!)||[];

  }
  //key api 
  private apiKey: string = "LovBZJTz13Ok2TR6ubbFEF5vx5dsMRcC";
  private servicioUrl : string ="http://api.giphy.com/v1/gifs";
  private _historial: string[] =[];

  //retsultado sera igual a la data señalada
  public resultados: Gif[] = []

  get historial(){
    //detemrinando dimencion de un arreglo 

    return [...this._historial]; //! nSpred- romper referencia 
  }

  buscarGifs(query: string){
    //si NO  se incluye, si no existe ase añade 

    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      //Persistir informacion(propiedad, algn string)
      //!no se puede guardar objetos
      //Json.Stringifi convierte un objeto a un json -> 
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }
    //Params
    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("q", query)
    .set("limit", 10)





    //! retorna observables gran manipulacion en la peticion -> 
    //*Siempre -> deteminar un tipo de dato
    //! Se aconseja en el Get -> esgenerico 
    //? -> si el parametro se llama igual que la varialbe oslo pon uno solo {params: params}
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe((resp)=>{//? congia en mi se lo que hago
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem("resultados", JSON.stringify(this.resultados));
    }); //se ejecutara cuando tengamos la respuesta 
  }
}
