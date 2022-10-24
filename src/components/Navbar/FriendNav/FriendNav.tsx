
import React from 'react';
import Friend from '../../../Model/Friend';
import FriendNavInfo from './FridenNavInfo/FriendNavInfo';

export default class FriendNav extends React.Component<{ friends: Friend[] }> {

    
    render() {
        let borders = this.props.friends.slice(0, 3);
        let Infos = borders.map(f => <FriendNavInfo{...f} />)
        return (
            <div>
                {Infos}
            </div>
        );
    };
}