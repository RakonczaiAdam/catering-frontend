import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoresById } from "./storeSlice";

const Stores = ()=>{
    const dispatch = useDispatch()
    const stores = useSelector(state => state.store.stores)
    useEffect(()=>{
        dispatch(fetchStoresById())
    }, [dispatch])
    return (
        <div>
            {stores?.map(store => {
                return(
                    <div key={store.id}>
                        {store.storeName}
                    </div>
                )
            })}
        </div>
    )
}

export {Stores}