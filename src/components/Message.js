import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ message, author, date }) => {
    let d = new Date(date);
    return (
        <p className={author === 'Me' ? 'MyMessage' : null}>
            <i>{author} says:</i> {message}  <small>{` ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</small>
        </p >
    )
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Message
