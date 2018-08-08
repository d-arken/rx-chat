import * as t from '../ActionTypes'

const initialState = {

}

const messages = (state = initialState, action) => {
    switch (action.type) {

        case t.SEND_MESSAGE:
        case t.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id,
                    date: action.date
                }
            ])

        default:
            return state
    }
}


export default messages;