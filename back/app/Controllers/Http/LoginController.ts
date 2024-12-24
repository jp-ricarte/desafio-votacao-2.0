import { Exception } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CreateUser, Login, Token } from "App/Models/LoginModel";
import { MessageResponse } from "App/Models/MessageSucessModel";
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
        let user: Login;
        try {
            token = await auth.attempt(data.email, data.password);
            user = auth.user;
        } catch (error) {
            throw new Exception("Credenciais inválidas", 401);
        }

        return { token: token.token, type: token.type, user };
    }

    public async index(context: HttpContextContract): Promise<Login> {
        const id: number = context.params.id;
        return await this.loginService.getUsuario(id);
    }

    public async post({ request, auth }): Promise<MessageResponse> {
        const data: CreateUser = request.body() as CreateUser;
        return await this.loginService.salvarUsuario(data, auth?.user);
    }
}
