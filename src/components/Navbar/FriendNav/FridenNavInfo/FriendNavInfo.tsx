import React from 'react';
import Friend from '../../../../Model/Friend';
import classes from './FriendNavInfo.module.css'


function FriendNavInfo(props:Friend) {
  return (
      <div className={classes.friend}>
          <img src={props.imgAva} />
          {props.name}
      </div>
  );
}

export default FriendNavInfo;