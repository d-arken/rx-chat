import React from 'react'
import PropTypes from 'prop-types'

let el;

const MessageInput = (props) => {
    return (
        <div>
            <textarea
                ref={ref => el = ref}
                onKeyPress={
                    e => {
                        if (e.key === 'Enter') {
                            props.dispatch(el.value, 'Me')
                            el.value = '';
                        }
                    }
                }
                type='text'
            ></textarea>
        </div>
    )
}

MessageInput.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default MessageInput
