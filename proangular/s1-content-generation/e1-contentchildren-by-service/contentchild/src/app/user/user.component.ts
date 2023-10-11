import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: ".app-user",
  template: `
    <hr />
    <h1><u>User comp</u>: {{ name }}</h1>
    <p>
      <b>[intropolation e.g.]</b> User name is:
      {{ user.name }}
      {{ math }}
    </p>
    <hr />
    <app-header></app-header>
    <div>
      <h1>
        app directive: <span appColory> @HostBinding() </span>/
        @HostListener()<span></span>
      </h1>
    </div>
    <hr />
  `,
  styles: [],
})
export class UserComponent {
  math = this.getMath();
  userCardUser = new BehaviorSubject("");
  name = "";

  user = {
    name: "Vasya",
  };

  getMath() {
    return Math.random();
  }

  setNameFromComponent(userCardUser: string) {
    this.userCardUser.next(userCardUser);
    this.name = userCardUser;
  }
}
