import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbx-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegueta',
      power: 9500
    },
  ];

  onNewCharacter(character: Character):void{
    // this.characters
    console.log(character);
  }
}
