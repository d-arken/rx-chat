import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const MessageListContainer = connect(state => ({
    users: state.users
}), {})(MessageList)

export default MessageListContainer