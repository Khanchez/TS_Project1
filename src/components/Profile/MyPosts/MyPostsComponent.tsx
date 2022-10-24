import React, { ReactNode } from 'react';
import Post from '../../../Model/Post';
import PostComponent from './Post/PostComponent';
import classes from './MyPostsComponent.module.css'
import PostService from '../../../Service/PostService';
import { inject } from 'inversify';

export default class MyPostsComponent extends React.Component<{ posts: Array<Post> }>{

    private newPostElement: React.RefObject<HTMLTextAreaElement>;
    private postElements: ReactNode;
    private postService: PostService;
    private postsData: Array<Post>;

    constructor(@inject('postService') postService: PostService, props: { posts: Post[]; } | Readonly<{ posts: Post[]; }>) {
        super(props);
        this.newPostElement = React.createRef();
        /*this.postElements = this.props.posts.map(p => <PostComponent {...p} />)*/
        this.postService = postService;
        this.postsData = this.postService.getAllPosts();
        this.postElements = this.postsData.map(p => <PostComponent {...p}/>)
    }

    render() {
        return (
            <div className={classes.postsBlock}>
                My Post
                <div>
                    <div>
                        <textarea ref={this.newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={() => { } }>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {this.postElements}
                </div>
            </div>
            )

    }
}