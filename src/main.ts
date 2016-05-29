///<reference path="../typings/index.d.ts"/>

import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';

function main(){
  bootstrap(App, [])
    .catch(err => console.error(err));
}

// TODO only do this in dev
// activate hot module reload
let ngHmr = require('angular2-hmr');
ngHmr.hotModuleReplacement(main, module);

// bootstrap when document is ready
// document.addEventListener('DOMContentLoaded', () => main());
