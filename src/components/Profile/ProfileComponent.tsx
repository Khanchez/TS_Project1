import React from 'react';
import MyPostsComponent from './MyPosts/MyPostsComponent';
import ProfileInfoComponent from './ProfileInfo/ProfileInfoComponent';
import classes from './ProfileComponent.module.css'
import Post from '../../Model/Post';


export default class ProfileComponent extends React.Component<{ posts: Array<Post> }>{
    render() {
        return (<div className={classes.content}>

            <ProfileInfoComponent />
            <MyPostsComponent posts={this.props.posts} />
        </div>
        );
    }
}




