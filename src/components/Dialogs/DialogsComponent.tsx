import React, { RefObject } from 'react';
import { Dialogs } from '../../Model/Dialogs';
import Message from '../../Model/Message';
import DialogItemComponent from './DialogItem/DialogItemComponent';
import MessageComponent from './Message/MessageComponent';
import classes from './Dialogs.module.css'

export default class DialogsComponent extends React.Component<{ dialogs: Array<Dialogs>, messages: Array<Message>, img: Array<Dialogs> }>{

    private messageItem: React.RefObject<HTMLTextAreaElement>;

    constructor(props:any) {
        super(props);
        this.ButtonForMessage = this.ButtonForMessage.bind(this);
        this.messageItem = React.createRef();
    }

    ButtonForMessage = (messageItem: RefObject<any>) => {
        let MessageData = messageItem.current.value;
        alert(MessageData)
    }
    render() {

        let dialogsElements = this.props.dialogs
            .map(d => <DialogItemComponent img={d.img} name={d.name} id={d.id} />)


        let MessagesElements = this.props.messages
            .map(m => <MessageComponent message={m.message} />)

       

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {MessagesElements}
                </div>
                <div className={classes.addMessage}>
                    <textarea ref={this.messageItem}></textarea>
                    <button onClick={() => { this.ButtonForMessage(this.messageItem) }} className={classes.button}>Отправить</button>
                </div>
            </div>
        );
    }
}


