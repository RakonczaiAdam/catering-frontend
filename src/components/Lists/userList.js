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
            {users.data[0].name}
            {/* {users.data.map(user=>{
                return(<li>{user.name}</li>)
            })} */}
        </div>
    )
}
export { UserList }