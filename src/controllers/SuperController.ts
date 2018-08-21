import { Controller } from 'tsoa';


export class SuperController extends Controller {

    protected setCreatedHTTPStatus(): void {
        this.setStatus(201);
    }

    protected setNoContentHTTPStatus(): void {
        this.setStatus(204);
    }

}