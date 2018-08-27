import { RegisterRoutes} from "./routes";
import * as Hapi from "hapi";
import DataAccess from './dataAccess/DataAccess';
import Inert from "inert";

class HapiApp {

public build(): Hapi.Server {
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
    server.path(__dirname + '/swagger-ui');
    server.route({ 
        path: '/api/v1/redoc.html', 
        method: 'GET',
        handler: { 
            file: './redoc.html' 
        } 
    });

    server.route({ 
        path: '/api/v1/swagger.json', 
        method: 'GET',
        handler: { 
            file: './swagger.json' 
        } 
    });

    RegisterRoutes(server);
}

}

export default new HapiApp();