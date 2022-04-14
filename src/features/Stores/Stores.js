import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoresById } from "./storeSlice";

const Stores = ()=>{
    const dispatch = useDispatch()
    const storesData = useSelector(state => state.store)
    useEffect(()=>{
        dispatch(fetchStoresById()).unwrap().catch(error=>{
            console.log(error)
        })
    }, [dispatch])
    return (
        <div>
            {storesData.stores?.map(store => {
                return(
                    <div>{store.storeName}</div>
                )
            })}
        </div>
    )
}

export {Stores}