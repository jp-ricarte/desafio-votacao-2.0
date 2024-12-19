import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Login } from "App/Models/LoginModel";
import LoginService from "App/Services/LoginService";

export default class LoginController {

  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public async get() {
    return await this.loginService.listarUsuarios();
  }

  public async login({ request, auth }) {
    const data: Login = request.all();
    const token = await auth.attempt(data.email, data.password)

    return token;
  }

  public async index(context: HttpContextContract) {
    const id: number = context.params.id;
    return await this.loginService.getUsuario(id);
  }

  public async post(context: HttpContextContract) {
    const data: Login = context.request.all() as Login;

    return await this.loginService.salvarUsuario(data);
  }
}
