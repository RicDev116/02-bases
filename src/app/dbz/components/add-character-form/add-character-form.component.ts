import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrl: './add-character-form.component.css'
})
export class AddCharacterFormComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);
  };
}
