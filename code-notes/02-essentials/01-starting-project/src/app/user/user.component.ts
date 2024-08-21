import {Component, computed, signal} from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  /*
  All features here will be available in the templateUrl component.
  If we add private to the properties here it only will be available here in this
  component, but if it's without declaration then will be public and accessible in
  templateUrl.
  */
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'users/' + this.selectedUser().avatar)

  // This code below was replaced by the above, which use signal approach.
  // get imagePath() {
  //   return 'users/' + this.selectedUser.avatar
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
