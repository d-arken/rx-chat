import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({ users }) => {
    return (
        <select multiple>
            {
                users.map(user => (
                    <option key={user.id}>{user.name}</option>
                ))
            }
        </select>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
}

export default UserList
