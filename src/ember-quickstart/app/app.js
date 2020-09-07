import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-quickstart/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

import singleSpaEmber from 'single-spa-ember';
// This is the single-spa part
const emberLifecycles = singleSpaEmber({
  App, // required
  appName: 'ember-app', // required
  createOpts: { // optional
      rootElement: '#ember-app',
  },
})
// Single-spa lifecycles.
export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = emberLifecycles.unmount;