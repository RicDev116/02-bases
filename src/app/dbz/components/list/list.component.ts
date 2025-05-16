import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {

  @Output()
  onDeleteCharacter:EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Otro',
      power: 15000
    },
  ];

  emitDeleteId(id: string): void {
    // console.log('onDeleteCharacter', index);
    this.onDeleteCharacter.emit(id);
  }
}
