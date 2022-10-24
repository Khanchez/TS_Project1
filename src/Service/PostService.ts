import { inject, injectable } from "inversify";
import Post from "../Model/Post";
import StateService from "./StateService";


@injectable()
export default class PostService {

    private stateService: StateService;

    constructor(@inject('stateService') stateService: StateService) {
        this.stateService = stateService;
    }

    getAllPosts(): Array<Post> {
        return this.stateService.getPostData();
    }

    addPost(post: Post) {
        this.getAllPosts().push(post)
    }

}