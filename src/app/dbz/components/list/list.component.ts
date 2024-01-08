import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(index: number):void{
    //TODO emitir el id del personaje
    console.log(index);
    this.onDeleteCharacter.emit(index);
  }
}
