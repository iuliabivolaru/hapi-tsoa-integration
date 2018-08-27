import { RegisterRoutes} from "./routes";
import * as Hapi from "hapi";
import DataAccess from './dataAccess/DataAccess';
import Inert from "inert";

class App {

public build(): Hapi.Server {
    // const Inert = require('inert');
    const server: Hapi.Server = new Hapi.Server();
    server.connection({
        host: 'localhost',
        port: 3000
    })
    server.register(Inert);
    this.routes(server);
    DataAccess.connect();
    return server;
}

private routes(server: Hapi.Server): void {
    // let swaggerPath = '../swagger-ui';
    // server.path(swaggerPath);
    server.route({ 
        path: '/api/v1/redoc.html', 
        method: 'GET',
        handler: { 
            file: '/Users/iuliabivolaru/yetAnotherHapiProject/swagger-ui/redoc.html' 
        } 
    });

    server.route({ 
        path: '/api/v1/swagger.json', 
        method: 'GET',
        handler: { 
            file: '/Users/iuliabivolaru/yetAnotherHapiProject/swagger-ui/swagger.json' 
        } 
    });

    RegisterRoutes(server);
}

}

export default new App();