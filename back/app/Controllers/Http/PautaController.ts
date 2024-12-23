import { CreatePauta, Pauta } from "App/Models/PautaModel";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import PautaService from "App/Services/PautaService";
import { Login } from "App/Models/LoginModel";
import { MessageResponse } from "App/Models/MessageSucessModel";

export default class PautaController {
    private pautaService: PautaService;

    constructor() {
        this.pautaService = new PautaService();
    }

    public async get(): Promise<Pauta[]> {
        return await this.pautaService.listarPautas();
    }

    public async index(context: HttpContextContract): Promise<Pauta> {
        const id: number = context.params.id;
        return await this.pautaService.getPauta(id);
    }

    public async post({ request, auth }: HttpContextContract): Promise<number> {
        const data: CreatePauta = request.body() as CreatePauta;
        const user = auth.user as Login;
        return await this.pautaService.criarPauta(data, user);
    }

    public async vote({ request, auth }: HttpContextContract): Promise<MessageResponse> {
        const idPauta: number = request.param('id');
        const voto: boolean = request.param('voto');
        const user = auth.user as Login;
        return await this.pautaService.votarPauta(idPauta, voto, user);
    }

    public async resultadoVotosPauta(context: HttpContextContract) {
        const idPauta: number = context.params.id;
        return await this.pautaService.resultadoVotosPauta(idPauta);
    }
}