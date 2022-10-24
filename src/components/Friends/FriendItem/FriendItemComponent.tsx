import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from '../../../Model/Friend';
import classes from './FriendItemComponent.module.css'


const FriendItemComponent: React.FC<{ friend: Friend }> = ({ friend }) => (
    <div className={classes.item}>
        <NavLink to={"/friends/" + friend.id}>{friend.name}</NavLink>
    </div>
);


export default FriendItemComponent;