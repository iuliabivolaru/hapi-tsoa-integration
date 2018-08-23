import * as Hapi from "hapi";
import { App } from "./app";
import * as http from "http";

// export function init(
// ): Hapi.Server {
//   try {
//     const server = new Hapi.Server({
//       host: 'localhost',
//       port: 3000
//     });
  
//     server.start();

//     return server;
//   } catch (err) {
//     console.log("Error starting server: ", err);
//     throw err;
//   }

// }

// const server: Hapi.Server = new Hapi.Server({
//        host: 'localhost',
//        port: 3000
// })

// server.route({
//     method: "GET",
//     path: "/",
//     handler: function(request,h) {

//       return'hello world';
//   }

// });


// server.start();

const hapiServer = App.build();
hapiServer.start();


