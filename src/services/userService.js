import  axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

const getUsers = async () =>{
    const res = await api.get('/users').then((res)=>{
        console.log(res.data);
        return res.data;
    }).catch((error)=>{
        console.log(error);
    });
    return res;
}

export { getUsers }