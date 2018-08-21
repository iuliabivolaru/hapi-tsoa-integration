import * as Hapi from "hapi";

export function init(
): Hapi.Server {
  try {
    const server = new Hapi.Server({
      host: 'localhost',
      port: 3000
    });
  
    server.start();

    return server;
  } catch (err) {
    console.log("Error starting server: ", err);
    throw err;
  }

}




//    server.route({
//      method: "GET",
//      path: "/",
//      handler: (request: hapi.Request, reply: hapi.IReply) => {
//      reply("Hello World")
// }

