import { RegisterRoutes} from "./routes";
import * as Hapi from "hapi";

// const server: Hapi.Server = new Hapi.Server({
//     host: 'localhost',
//     port: 3000
// })
// RegisterRoutes(server);

export class App {

public static build(): Hapi.Server {
    const server: Hapi.Server = new Hapi.Server({
        host: 'localhost',
        port: 3000
    });
    this.routes(server);
    return server;
}

private static routes(server: Hapi.Server): void {
    RegisterRoutes(server);
}

}