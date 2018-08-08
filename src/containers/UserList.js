import { connect } from 'react-redux'
import UserList from '../components/UserList'

const Sidebar = connect(state => ({
    users: state.users
}), {})(UserList)

export default Sidebar;
