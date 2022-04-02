import { CircularProgress } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { http_status } from '../../config';
import { UserList } from './userList';
import { fetchUserData } from './userSlice';

const DisplayUsers = ()=>{
    const dispatch = useDispatch();
    const {loadingUserData} = useSelector(state => state.users);
    useEffect(()=>{
        dispatch(fetchUserData());
    }, [dispatch])
    return (    
        <div>
            {loadingUserData === http_status.PENDING && <CircularProgress/>}
            {loadingUserData === http_status.REJECTED && 
                <Alert severity='error' spacing = {2}>
                    Error during displaing user data
                </Alert>
            }
            {loadingUserData === http_status.FULFILLED &&
                <>
                <Alert severity='success' spacing = {2}>
                    Fetched data correctly 
                </Alert>
                <UserList/>
                </>
            }
        </div>
    )
}
export { DisplayUsers }