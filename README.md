# Single Spa Ember bug?
A bug, or me just missing something.

## What I'm trying to do
I'm trying to migrate an older ember application so I wanted to use Single-spa to help

## What am I seeing
When I hit my ember url path I see my &lt;script&gt; tag for my ember-quickstart.js and vendor.js load but the ember app does not start.

I'm using the default [ember new ember-quickstart](https://guides.emberjs.com/release/getting-started/quick-start/) as a test ember app that is known to work.

## What am I doing.
In my ember app I'm following the instruction [in the Ecosystem ember section](https://single-spa.js.org/docs/ecosystem-ember)
I've updated my `src/ember-quickstart/app/app.js` with the lifecycle methods.
I added single spa ember to `src/ember-quickstart/ember-cli-build.js`
Registered single spa ember `src/root-application/single-spa-config.js`

## How to setup and see the this example

Steps

1. `run yarn` to install node_modules
2. `run yarn install-ember` to install node_modules in the ember app  under `src/ember-quickstart`
3. `run yarn build` to build the ember app, build single spa and put everything into the dist/ folder
4. `run yarn watch` start the webpack-dev-server

On your web browser goto http://localhost:8081/ look at your network tab and you will see single spa root-application.js load and not ember (that is good).

Goto so http://localhost:8081/ember and you will see on your network tab that ember-quickstart.js and vender.js is loading and the script tag is on the dom but the ember app is not mounted/started.

Js is hosted.

http://localhost:8081/vendor.js

http://localhost:8081/ember-quickstart.js