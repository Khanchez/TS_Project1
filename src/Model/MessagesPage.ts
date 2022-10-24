import { Dialogs } from "./Dialogs";
import Message from "./Message";

export default interface MessagesPage {
    messagesData: Array<Message>;
    dialogsData: Array<Dialogs>;
}