import Friend from "./Friend";
import MessagesPage from "./MessagesPage";
import ProfilePage from "./ProfilePage";

export default interface StateInterface {

    friendsData: Array<Friend>;
    profilePage: ProfilePage;
    messagePage: MessagesPage;

}