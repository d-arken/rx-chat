import { takeEvery } from 'redux-saga/effects';
import * as t from '../ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(t.SEND_MESSAGE, (action) => {
        action.author = params.username;
        params.socket.send(JSON.stringify(action));
    });
}


export default handleNewMessage;