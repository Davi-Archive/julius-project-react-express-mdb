import { UserData, UserDataSearch } from "../dto/userDto";
import HttpService from "./HttpService";

export default class ApiUsuarioService extends HttpService {
    async login(credenciais: any) {
        const res = await this.post('/users/login', credenciais)

        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("token", res.data.token);

        const usuario = await this.get('/users/me');
        console.log(usuario);
        localStorage.setItem('id', usuario.data._id);


        return res
    }

    async register(userData: UserData) {
        return await this.post('/users', userData)
    }

    async getInfoAboutMyUser(userData: UserDataSearch) {
        if(!localStorage.getItem('id')){
            return await this.post('/users', this.getInformationAboutTheLoggedUser)
        }
        return await this.post('/users', userData)
    }

    getInformationAboutTheLoggedUser() {
        return {
            id: localStorage.getItem('id'),
            nome: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
        }
    }

    logout() {
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('id')
    }
}