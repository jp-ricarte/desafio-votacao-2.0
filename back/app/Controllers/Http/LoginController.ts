import { Exception } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Login, Token } from "App/Models/LoginModel";
import LoginService from "App/Services/LoginService";

export default class LoginController {
    private loginService: LoginService;

    constructor() {
        this.loginService = new LoginService();
    }

    public async get(): Promise<Login[]> {
        return await this.loginService.listarUsuarios();
    }

    public async login({ request, auth }): Promise<Token> {
        const data: Login = request.body();
        let token: Token;
        try {
             token = await auth.attempt(data.email, data.password);
        } catch (error) {
            throw new Exception('Email ou senha incorretos', 412);
        }

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
