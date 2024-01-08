import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrl: './add-character-form.component.css'
})
export class AddCharacterFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{
    // debugger;
    console.log(this.character);

    if(this.character.name.length ===0) return;

    this.onNewCharacter.emit({...this.character});

    this.character = {name:'',power:0};

  };
}
