import { IOnePostFormat, JSONPostFormat } from "../dto/PostDto";
import HttpService from "./HttpService";

export default class PostService extends HttpService {
    async loadPosts(): Promise<JSONPostFormat> {
        return await this.get('/posts');
    }

    async deleteOnePostById(postId: string): Promise<IOnePostFormat> {
        return await this.delete(`/posts/${postId}`)
    }

    async editOnePostById(postId: string, postData: IOnePostFormat) {
        return this.put(`/posts/${postId}`, postData);
    }

    async makeAPost(postData: IOnePostFormat) {
        return this.post('/posts', postData);
    }

}