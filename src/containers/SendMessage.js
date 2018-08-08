import { connect } from 'react-redux';
import MessageInput from '../components/MessageInput';
import { sendMessage } from '../actions/chat'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(sendMessage(message, author))
    }
})

const SendMessage = connect(() => ({}), mapDispatchToProps)(MessageInput)

export default SendMessage
