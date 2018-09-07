import { RegisterRoutes } from "./routes";
import * as Hapi from "hapi";
import DataAccess from './dataAccess/DataAccess';

class HapiApp {

    server: Hapi.Server;

    public build(): void {
        this.server = new Hapi.Server({
            host: 'localhost',
            port: 3000
        });

        this.registerInert(this.server).then(
            () => {
                this.routes(this.server);
                DataAccess.connect();
                return this.server.start();
            }
        );
    }

    public async registerInert(server: Hapi.Server): Promise<void> {
        await server.register({
            plugin: require('inert')
        });
    };

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