import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message';

const MessageList = ({ messages }) => {
    return (
        <div>
            {
                messages.map(message => <Message key={message.id} {...message} />)
            }
        </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default MessageList


