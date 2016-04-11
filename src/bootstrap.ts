import { enableProdMode } from 'angular2/core';
import { bootstrap, ELEMENT_PROBE_PROVIDERS } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

const ENV_PROVIDERS = [];
if (process.env.ENV === 'prod' ) {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

import { Todos } from './app/app';

document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(Todos, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
  ])
  .catch(err => console.log(err));
});

