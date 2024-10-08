import {Component, computed, Input, input, Output, output, EventEmitter} from '@angular/core';
import { type User } from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Instead of use split properties, we can use a complete object.
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // Decorator approach for output
  @Output() select = new EventEmitter<string>();

  // Most modern approach to deal with outputs, but you won't find it with frequency in projects out there.
  // select = output<string>(); // it isn't signal event, it is EventEmitter.

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  // Input Decorator approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  //
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
