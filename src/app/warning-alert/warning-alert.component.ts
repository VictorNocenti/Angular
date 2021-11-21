import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>Shit works</p>`,
  styles: [`
      p {
          padding:20px;
          background-color: mistyrose;
          border:1px solid indianred;
          border-radius: 3px;
      }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
