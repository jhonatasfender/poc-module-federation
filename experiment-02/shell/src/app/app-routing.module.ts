import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'poc',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'poc',
      exposedModule: './poc',
      elementName: 'app-root',
    } as WebComponentWrapperOptions,
  },
  {
    matcher: startsWith('cotagro'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4000/remoteEntry.js',
      remoteName: 'cotagro',
      exposedModule: './web-components',
      elementName: 'app-mfe',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'angular12',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular1',
      exposedModule: './web-components',
      elementName: 'angular1-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element',
    } as WebComponentWrapperOptions,
  },

  {
    path: 'angularjs',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angularjs',
      exposedModule: './web-components',
      elementName: 'angularjs-element',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
