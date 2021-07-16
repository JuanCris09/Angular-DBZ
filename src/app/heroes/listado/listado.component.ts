import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor']
  heroesBorrado:string = '';
  borrarHeroe(){
    this.heroesBorrado = this.heroes.shift() || '';
  }

}
