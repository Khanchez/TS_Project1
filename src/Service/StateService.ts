import { injectable } from "inversify";
import { Dialogs } from "../Model/Dialogs";
import Friend from "../Model/Friend";
import Message from "../Model/Message";
import Post from "../Model/Post";
import StateInterface from "../Model/StateInteface";

@injectable()
export default class StateService {
    private state: StateInterface;

    constructor() {
        this.state = this.getSimpleState();
    }

    getFriendData():Array<Friend> {
        return this.state.friendsData;
    }

    getPostData(): Array<Post> {
        return this.state.profilePage.PostData;

    }

    getMessageData(): Array<Message> {
        return this.state.messagePage.messagesData
    }

    getDialogsData(): Array<Dialogs> {
        return this.state.messagePage.dialogsData
    }
    
    getSimpleState(): StateInterface {
    return ({
        friendsData:
            [
                new Friend(1, 'Друг1', 21, 'https://sun9-13.userapi.com/impf/c847218/v847218420/189d1c/Ffl10UAYOs4.jpg?size=2560x1696&quality=96&sign=014cdb087640ded78d57fb9b2162f2df&type=album'),
                new Friend(2, 'Друг2', 23, 'https://sun9-79.userapi.com/impg/kpkL22Ys6QTAzxbeqSooNnVlMkDlRDkXI77TRg/011N4mqJMYc.jpg?size=514x1280&quality=96&sign=c311da98da52e4906e378ad99fe374e3&type=album'),
                new Friend(3, 'Друг3', 26, 'https://sun1-24.userapi.com/impf/c846416/v846416303/11bee5/_M-XiyTe_Yo.jpg?size=2560x1920&quality=96&sign=62d824dfd85578a79d8caeaf2509b19a&type=album'),
                new Friend(4, 'Друг4', 24, 'https://sun9-26.userapi.com/impg/Gaequo_ZbVyB1AxdzMgzeloybWbsXXftrBAinw/lOX1H3IZJos.jpg?size=1620x2160&quality=96&sign=1cac05f1f91f47cc1b0c7e8837f60c9f&type=album'),
                new Friend(5, 'Друг5', 22, 'https://sun9-57.userapi.com/impg/t0sm6cQMPmI2kOA_WFmw_evlAf9Bs4Xdc_U40g/nrWUiSfRTFU.jpg?size=1620x2160&quality=95&sign=14ec08d28e13153c5c4194b7e7b37339&type=album'),
                new Friend(6, 'Друг6', 21, 'https://sun9-56.userapi.com/impg/Vhf2aCl6ez5HbErdF3xquj1QE4MS1w9MUEPWTA/kddOhUgkLJo.jpg?size=988x1749&quality=96&sign=07eb40fe80df1262157b93e67fe6b7bf&type=album'),
                new Friend(7, 'Друг7', 20, 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'),
            ],
        profilePage: {
            PostData: [
                { id: 1, post: 'Hi, how are you?', likesCount: 25 },
                { id: 2, post: 'Its my first post', likesCount: 14 },]
        },
        messagePage: {
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you" },
                { id: 3, message: "Hello" },
            ],
            dialogsData: [
                { id: 1, name: "Контакт 1", img: "https://sun9-13.userapi.com/impf/c847218/v847218420/189d1c/Ffl10UAYOs4.jpg?size=2560x1696&quality=96&sign=014cdb087640ded78d57fb9b2162f2df&type=album" },
                { id: 2, name: "Контакт 2", img: "https://sun9-79.userapi.com/impg/kpkL22Ys6QTAzxbeqSooNnVlMkDlRDkXI77TRg/011N4mqJMYc.jpg?size=514x1280&quality=96&sign=c311da98da52e4906e378ad99fe374e3&type=album" },
                { id: 3, name: "Контакт 3", img: "https://sun1-24.userapi.com/impf/c846416/v846416303/11bee5/_M-XiyTe_Yo.jpg?size=2560x1920&quality=96&sign=62d824dfd85578a79d8caeaf2509b19a&type=album" },
                { id: 4, name: "Контакт 4", img: "https://sun9-26.userapi.com/impg/Gaequo_ZbVyB1AxdzMgzeloybWbsXXftrBAinw/lOX1H3IZJos.jpg?size=1620x2160&quality=96&sign=1cac05f1f91f47cc1b0c7e8837f60c9f&type=album" },
                { id: 5, name: "Контакт 5", img: "https://sun9-57.userapi.com/impg/t0sm6cQMPmI2kOA_WFmw_evlAf9Bs4Xdc_U40g/nrWUiSfRTFU.jpg?size=1620x2160&quality=95&sign=14ec08d28e13153c5c4194b7e7b37339&type=album" },
                { id: 6, name: "Контакт 6", img: "https://sun9-56.userapi.com/impg/Vhf2aCl6ez5HbErdF3xquj1QE4MS1w9MUEPWTA/kddOhUgkLJo.jpg?size=988x1749&quality=96&sign=07eb40fe80df1262157b93e67fe6b7bf&type=album" }
            ]
        },
    });
}
}