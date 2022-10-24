import React from 'react';
import classes from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { Dialogs } from '../../../Model/Dialogs';


function DialogItemComponent(dialog: Dialogs) {
  return (
      <div>
          <NavLink to={"/dialogs/" + dialog.id} className={classes.dialogsItems}><img src={dialog.img} />{dialog.name}</NavLink>
      </div>
  );
}

export default DialogItemComponent;