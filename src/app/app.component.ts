/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          <button md-button router-active [routerLink]=" ['Index'] ">
            Index
          </button>
          <button md-button router-active [routerLink]=" ['Home'] ">
            Home
          </button>
          <button md-button router-active [routerLink]=" ['About'] ">
            About
          </button>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <footer>
        <img [src]="angularclassLogo" width="6%">
        <span id="footerText">WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      </footer>
      </md-content>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
