// root-application.js
import { registerApplication, start } from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
registerApplication('ember-quickstart', loadingFunction, activityFunction);


function activityFunction(location) {
  // Only render the ember app when the url hash starts with ember
  return location.pathname.startsWith('/ember');
}
// single-spa-ember helps us load the script tags and give the ember app module to single-spa.
function loadingFunction() {
  const appName = 'ember-quickstart';
  const appUrl = '/ember-quickstart.js';
  const vendorUrl = '/vendor.js'; // Optional if you have one vendor bundle used for many different ember apps
  return loadEmberApp(appName, appUrl, vendorUrl);
}

start();
