
import axios from "axios";
import { LoadingHelper } from "../helper/LoadingHelper";
const API_URL = process.env.NEXT_PUBLIC_API_URL + '/api'

export default class HttpService {
    requisitionsNumber = 0;
    constructor() {
        //@ts-ignore
        this.axios = axios.create({
            baseURL: API_URL,
        });

        this.requisitionsNumber = 0;
        //@ts-ignore
        this.axios.interceptors.request.use((config) => {
            this.requisitionsNumber++;

            if (this.requisitionsNumber === 1) {
                LoadingHelper.exibir();
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
            this.requisitionsNumber--;
            if (this.requisitionsNumber === 0) {
                LoadingHelper.oculto();
                console.log("ocultar")
            }
            return response;
        });
    }

    async post(url: string, data: any) {
        console.log(`api url: ${API_URL}${url} || POST ${JSON.stringify(data)}`);
        //@ts-ignore
        const res = await this.axios.post(url, data);
        return res;
    }

    async get(url: string) {
        console.log(`api url: ${API_URL}${url} || GET`);
        //@ts-ignore
        return await this.axios.get(url);
    }

    async put(url: string, data: any) {
        console.log(`api url: ${API_URL}${url} || PUT`);
        //@ts-ignore
        return await this.axios.put(url, data);
    }

    async delete(url: string) {
        console.log(`api url: ${API_URL}${url} || DELETE`);
        //@ts-ignore
        return await this.axios.delete(url);
    }
}