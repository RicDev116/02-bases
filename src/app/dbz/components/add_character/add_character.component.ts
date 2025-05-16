import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add_character',
  templateUrl: './add_character.component.html',
  styleUrl: './add_character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public character : Character = {
    name: '',
    power: 0
  };

  emithCharacter(): void {
    if (this.character.name.length === 0) return;
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0
    };
  };
}
