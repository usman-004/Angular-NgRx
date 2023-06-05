// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  POST_STATE_NAME: 'posts',
  COUNTER_STATE_NAME: 'counter',
  AUTH_STATE_NAME: 'auth',

  //firebase_config
  firebaseConfig: {
    apiKey: 'AIzaSyAjs8cmpeYcLs83-J8qxwThpLrWtDtRfpg',
    authDomain: 'ngrx-effects-auth.firebaseapp.com',
    databaseURL: 'https://ngrx-effects-auth-default-rtdb.firebaseio.com',
    projectId: 'ngrx-effects-auth',
    storageBucket: 'ngrx-effects-auth.appspot.com',
    messagingSenderId: '632617375329',
    appId: '1:632617375329:web:b3c55c003c9572c4cffc20',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
