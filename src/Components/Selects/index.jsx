import React, { useState } from "react";
import { useReducer } from "react";
const Selected = () => {
    const [state, setState] = useState(1)
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case 'plus':
                return { ...state, count: state.count + payload };
            case 'minus':
                return { ...state, count: state.count - payload };
            default:
                return state;
        }
    }
    const [data, dispatch] = useReducer(reducer, { count: 2 })
    const onchangeSelect = (e) => {
        setState(Number(e.target.value));
    }
    return (
        <div>
            <h1>UseReducer</h1>
            <h1>Counter : {data.count}</h1>
            <button onClick={() => dispatch({ type: 'plus', payload: state })} >+ {state}</button>
            <select defaultValue={1} onChange={onchangeSelect}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={() => dispatch({ type: 'minus', payload: state })} >- {state}</button>
        </div>
    )
}

export default Selected