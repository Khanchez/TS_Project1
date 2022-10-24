import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Friend from '../../Model/Friend';
import FriendItemComponent from './FriendItem/FriendItemComponent';
import classes from './FriendsComponent.module.css'

export default class FriendsComponent extends React.Component<{ friends: Array<Friend> }> {

    
    private friendsList: ReactNode;

    constructor(props: { friends: Friend[]; } | Readonly<{ friends: Friend[]; }>) {
        super(props);
        this.friendsList = props.friends
            .map(f => <FriendItemComponent friend={f} />)
    }
       

    rander() {
        return (
        < div className = { classes.friend } >
                    { this.friendsList }
                </div >
     )   
    }

}