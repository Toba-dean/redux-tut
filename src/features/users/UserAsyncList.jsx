import { useSelector } from 'react-redux';
import { selectAllUsersAsync } from './userAsyncSlice';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const users = useSelector(selectAllUsersAsync)

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ))

    return (
        <section>
            <h2>Users</h2>

            <ul>{renderedUsers}</ul>
        </section>
    )
}

export default UsersList