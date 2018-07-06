import {PLATFORM} from 'aurelia-pal';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';
import 'jquery';
// import 'kendo.all.min';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-bridge');

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
