import { Component } from '@angular/core';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
})
export class Username {
  username: string = '';
  isDisabled: boolean = true;

  clearUsername() {
    this.username = '';
    this.isDisabled = true;
  }

  hasText() {
    if (this.username.length === 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
}
