/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1563429140830_2417';

//   // add your middleware config here
//   config.middleware = [];

//   // add your user config here
//   const userConfig = {
//     // myAppName: 'egg',
//   };

//   return {
//     ...config,
//     ...userConfig,
//     io: {
//       init: {},
//       namespace: {
//         '/': {
//           connectionMiddleware: [],
//           packetMiddleware: [],
//         },
//         '/example': {
//           connectionMiddleware: [],
//           packetMiddleware: [],
//         },
//       },
//       redis: {
//         host: '127.0.0.1',
//         port: '6379',
//         auth_pass: '',
//         db: 0,
//       },
//     },
//   };
// };

exports.io = {
  init: {},
  namespace: {
    '/': {
      connectionMiddleware: [ 'connection' ],
      packetMiddleware: [ 'packet' ],
    },
    '/chat': {
      connectionMiddleware: [ 'connection' ],
      packetMiddleware: [],
    },
  },
};
