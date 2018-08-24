import { RegisterRoutes} from "./routes";
import * as Hapi from "hapi";
import DataAccess from './dataAccess/DataAccess';

class App {

public build(): Hapi.Server {
    const server: Hapi.Server = new Hapi.Server();
    server.connection({
        host: 'localhost',
        port: 3000
    })
    this.routes(server);
    DataAccess.connect();
    return server;
}

private routes(server: Hapi.Server): void {
    RegisterRoutes(server);
}

}

export default new App();