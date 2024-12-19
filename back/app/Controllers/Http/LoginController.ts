import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Login } from "App/Models/LoginModel";
import LoginService from "App/Services/LoginService";

export default class LoginController {
    private loginService: LoginService;

    constructor() {
        this.loginService = new LoginService();
    }

    public async get(): Promise<Login[]> {
        return await this.loginService.listarUsuarios();
    }

    public async login({ request, auth }): Promise<string> {
        const data: Login = request.body();
        const token = await auth.attempt(data.email, data.password);

        return token;
    }

    public async index(context: HttpContextContract): Promise<Login> {
        const id: number = context.params.id;
        return await this.loginService.getUsuario(id);
    }

    public async post(context: HttpContextContract): Promise<string> {
        const data: Login = context.request.all() as Login;

        return await this.loginService.salvarUsuario(data);
    }
}
