import { IPostFormatFromApi } from "../dto/PostDto";
import HttpService from "./HttpService";

export default class PostService extends HttpService {
    async loadPosts(): Promise<IPostFormatFromApi> {
        return await this.get('/posts');
    }

    async deleteOnePostById(postId: string): Promise<IPostFormatFromApi> {
        return await this.delete(`/posts/${postId}`)
    }

    async editOnePostById(postId: string, postData:IPostFormatFromApi) {
        return this.put(`/posts/${postId}`, postData);
    }

    async makeAPost(postData: IPostFormatFromApi) {
        return this.post('/posts', postData);
    }

}