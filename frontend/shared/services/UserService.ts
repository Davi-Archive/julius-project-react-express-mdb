import { UserData, UserDataSearch } from "../dto/userDto";
import HttpService from "./HttpService";

export default class UserService extends HttpService {

    async login(credenciais: any): Promise<any> {
        let mockObj = {
            "email": "davi@davi.com",
            "password": "davi"
        }
        const res = await this.post('/users/login', mockObj)

        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('id', res.data._id);
        console.log(res);


        return res
    }

    async register(userData: UserData) {
        return await this.post('/users', userData)
    }

    async getInfoAboutMyUser(userData: UserDataSearch) {
        if (!localStorage.getItem('id')) {
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