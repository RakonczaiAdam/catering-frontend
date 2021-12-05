import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counterSlice";

const Counter = () =>{
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
    )
}

export { Counter }