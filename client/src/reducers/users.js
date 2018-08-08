import * as t from '../ActionTypes'

const initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {

        case t.ADD_USER:
            return state.concat([{ name: action.name, id: action.id, date: action.date }])

        case t.USERS_LIST:
            return action.users;

        default:
            return state
    }
}

export default users;