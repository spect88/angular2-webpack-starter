/*
 * These are globally available directives in any template
 */
// Angular 2
import { PLATFORM_DIRECTIVES } from '@angular/core';
// Angular 2 Router
import { ROUTER_DIRECTIVES } from '@angular/router';
// Angular 2 forms
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

// Angular 2 Material 2
// FIXME: not sure how to do it correctly
// import { MD_CORE_DIRECTIVES } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

const MATERIAL_DIRECTIVES = [
 ...MD_BUTTON_DIRECTIVES,
 ...MD_BUTTON_DIRECTIVES,
 ...MD_CARD_DIRECTIVES,
 ...MD_CHECKBOX_DIRECTIVES,
 ...MD_GRID_LIST_DIRECTIVES,
 ...MD_ICON_DIRECTIVES,
 ...MD_INPUT_DIRECTIVES,
 ...MD_LIST_DIRECTIVES,
 ...MD_PROGRESS_BAR_DIRECTIVES,
 ...MD_PROGRESS_CIRCLE_DIRECTIVES,
 ...MD_RADIO_DIRECTIVES,
 ...MD_SIDENAV_DIRECTIVES,
 ...MD_SLIDE_TOGGLE_DIRECTIVES,
 ...MD_TABS_DIRECTIVES,
 ...MD_TOOLBAR_DIRECTIVES
];

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
  ...MATERIAL_DIRECTIVES,
  ...REACTIVE_FORM_DIRECTIVES
];

export const DIRECTIVES = [
  { provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }
];
