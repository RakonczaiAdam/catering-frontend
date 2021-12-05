import { useEffect, useState } from 'react';
import { getUsers } from '../../services/userService'

const UserList = ()=>{
    const [users, setUsers] = useState([])  
    useEffect(()=>{
        setUsers(getUsers);
    }, []);
    return (
        <div>
            users:
            {users}
        </div>
    )
}
export { UserList }