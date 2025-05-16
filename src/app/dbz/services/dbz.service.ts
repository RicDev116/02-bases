import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})//injectable hace a la clase un singleton
//el decorador @Injectable indica que la clase puede ser inyectada en otros componentes o servicios
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 5000
    }
  ];

  addCharacter(character: Character): void {
    //operador spread ... para clonar el objeto
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  };

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  };

}
