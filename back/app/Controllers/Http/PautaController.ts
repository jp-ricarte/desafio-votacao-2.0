import { Pauta } from "App/Models/PautaModel";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import PautaService from "App/Services/PautaService";

export default class PautaController {
    private pautaService: PautaService;

    constructor() {
        this.pautaService = new PautaService();
    }

    public async get(): Promise<Pauta[]> {
        return await this.pautaService.listarPautas();
    }

    public async post({ request, auth }: HttpContextContract) {
        const data: Pauta = request.body() as Pauta;
        const user = auth.user;
        console.log('[USER]', user);
        return await this.pautaService.criarPauta(data, user);
    }
}