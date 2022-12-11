import axios from "axios";

process.env.NEXT_PUBLIC_API_URL + '/api'

export default class HttpService {
    quantidadeRequisicoes = 0;
    constructor() {
        //@ts-ignore
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
        });

        this.quantidadeRequisicoes = 0;
        //@ts-ignore
        this.axios.interceptors.request.use((config) => {
            this.quantidadeRequisicoes++;

            if (this.quantidadeRequisicoes === 1) {
                // LoadingHelper.exibir();
                console.log("exibir")
            }
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        });
        //@ts-ignore
        this.axios.interceptors.response.use((response) => {
            this.quantidadeRequisicoes--;
            if (this.quantidadeRequisicoes === 0) {
                // LoadingHelper.oculto();
                console.log("ocultar")
            }
            return response;
        });
    }
    async post(url: string, data: any) {
        //@ts-ignore
        const res = await this.axios.post(url, data);
        return res;
    }
    async get(url: string) {
        //@ts-ignore
        return await this.axios.get(url);
    }
    async put(url: string, data: any) {
        //@ts-ignore
        return await this.axios.put(url, data);
    }
}