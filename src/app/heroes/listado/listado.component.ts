import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {

  heroes: string[] = ['Superman', 'Ironman', 'Spiderman', 'Thor', 'Capitán América'];
  heroesBorrados: string[] = [];

  public borrarHeroe(index: number): void {

    const heroe: string = this.heroes[index];
        
    this.heroes.splice(index, 1);
    this.heroesBorrados.push(heroe);  
    
  }

  get mostrarHeroesBorrados(): string {
    return this.heroesBorrados.join(', ');
  }

  constructor() { 
    
  }


}
