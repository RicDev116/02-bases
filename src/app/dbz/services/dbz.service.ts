import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DBZService {

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
    this.characters.push(character);
    console.log(character);
  }

  onDeleteCharacter(index: number):void{
    this.characters.splice(index,1);
    console.log(index);
  }

}
