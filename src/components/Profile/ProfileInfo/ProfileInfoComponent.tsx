import React from 'react';
import classes from './ProfileInfoComponent.module.css'

function ProfileInfoComponent() {
  return (
      <div>
          <div>
              <img className={classes.img}
                  src='https://i.pinimg.com/originals/e9/b4/11/e9b4118e01a37a7b6054be93b54f4792.png' />
          </div>
          <div className={classes.descriptionBlock}>
              ava + description
          </div>
      </div>
  );
}

export default ProfileInfoComponent;