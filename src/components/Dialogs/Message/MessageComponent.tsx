import React from 'react';
import classes from '../Dialogs.module.css'

export default class MessageComponent extends React.Component<{ message: string }> {
    render() { 
    return(
      <div className = { classes.message } >•{ this.props.message }</div>
  );
}
}
