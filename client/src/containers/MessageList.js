import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const MessageListContainer = connect(state => ({
    messages: state.messages
}), {})(MessageList)

export default MessageListContainer