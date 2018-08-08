import React from 'react';
import '../Chat.css';
import MessageInput from '../containers/SendMessage';
import MessageListContainer from '../containers/MessageList';
import UserList from '../containers/UserList';

const ChatApp = () => (
    <div className="ChatContainer">
        <div className="UserList">
            <UserList />
        </div>

        <div className="InputContainer">

            <div className="MessageContainer">
                <MessageListContainer />
            </div>
            <div className="MessageInputContainer">
                <MessageInput />
            </div>

        </div>
    </div>
);


export default ChatApp;