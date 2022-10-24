import React from 'react';
import Post from '../../../../Model/Post';
import classes from './PostComponent.module.css'


function PostComponent(props:Post) {
  return (
      <div>
          <div className={classes.item}>
              <img src='https://st03.kakprosto.ru/images/article/2019/3/19/106096_5c906579b06855c906579b06bf.jpeg'></img>
              {props.post}
          </div>
          <div>
              <button>like</button>
              {props.likesCount}
          </div>
      </div>
  )
}

export default PostComponent;