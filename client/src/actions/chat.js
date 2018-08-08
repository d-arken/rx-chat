import * as t from '../ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const sendMessage = (message, author) => ({
    type: t.SEND_MESSAGE,
    id: nextMessageId++,
    message,
    author,
    date: Date()
})

export const addUser = name => ({
    type: t.ADD_USER,
    id: nextUserId++,
    name,
    date: Date()
})

export const messageReceived = (message, author, date) => ({
    type: t.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author,
    date
})

export const populateUsersList = users => ({
    type: t.USERS_LIST,
    users
})