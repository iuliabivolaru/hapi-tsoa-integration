// TODO: Replace this with HAPI middleware stuff
/* tslint:disable */
import { Controller, ValidateParam, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
import { BookController } from './controllers/BookController';

const models: TsoaRoute.Models = {
    "Book": {
        "properties": {
            "series": { "dataType": "string" },
            "name": { "dataType": "string", "required": true },
            "author": { "dataType": "string", "required": true },
        },
    },
};

export function RegisterRoutes(server: any) {
    server.route({
        method: 'get',
        path: '/api/v1/books',
        config: {
            handler: (request: any, reply: any) => {
                const args = {
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return reply(err).code(err.status || 500);
                }

                const controller = new BookController();

                const promise = controller.retrieve.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, reply);
            }
        }
    });


    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, request: any, reply: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                const response = (data || data === false) ? reply(data).code(200) : reply("").code(204);

                if (isController(controllerObj)) {
                    const headers = controllerObj.getHeaders();
                    Object.keys(headers).forEach((name: string) => {
                        response.header(name, headers[name]);
                    });

                    const statusCode = controllerObj.getStatus();
                    if (statusCode) {
                        response.code(statusCode);
                    }
                }
                return response;
            })
            .catch((error: any) => reply(error).code(error.status || 500));
    }

    function getValidatedArgs(args: any, request: any): any[] {
        const errorFields: FieldErrors = {};
        const values = Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return ValidateParam(args[key], request.query[name], models, name, errorFields)
                case 'path':
                    return ValidateParam(args[key], request.params[name], models, name, errorFields)
                case 'header':
                    return ValidateParam(args[key], request.headers[name], models, name, errorFields);
                case 'body':
                    return ValidateParam(args[key], request.payload, models, name, errorFields, name + '.');
                case 'body-prop':
                    return ValidateParam(args[key], request.payload[name], models, name, errorFields, 'body.');
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new ValidateError(errorFields, '');
        }
        return values;
    }
}
