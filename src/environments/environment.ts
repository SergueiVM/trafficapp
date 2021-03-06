// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as packageJson from '../../package.json';
import * as _ from 'lodash';

export const environment = {
  production: false,
  infocarUrl: 'https://x5j6sm2fv0.execute-api.eu-west-1.amazonaws.com/Prod/traffic/',
  version: _.get(packageJson, "version")
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
