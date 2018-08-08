import * as t from '../ActionTypes';
import { addUser, messageReceived, populateUsersList } from '../actions/chat';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://172.23.32.179:8080');

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: t.ADD_USER,
            name: username,
        }));
    }

    socket.onmessage = (e) => {
        const data = JSON.parse(e.data);

        switch (data.type) {
            case t.SEND_MESSAGE:
                dispatch(messageReceived(data.message, data.author, data.date));
                break;

            case t.ADD_USER:
                dispatch(addUser(data.name));
                break;

            case t.USERS_LIST:
                dispatch(populateUsersList(data.users))
                break;

            default:
                break;
        }
    }

    return socket;
}

export default setupSocket;