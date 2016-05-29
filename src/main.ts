/// <reference path="../typings/index.d.ts" />
//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';

bootstrap(App, [])
  .catch(err => console.error(err));
