import React, { useReducer, useState } from 'react'
function reducer(state, action) {
    return { count: state.count + 1 }
}

export default function App() {
    const [count, setCount] = useState(0)
    const [state, dispach] = useReducer(reducer, { count: 0 })

    function increment() {
        dispach()
    }
    //count in your component is a snapshot. If you click twice fast, both clicks see that same snapshot. Calling setCount(count - 1) twice would subtract 1 once. Using setCount(prev => prev - 1) tells React “whenever you run this, take whatever the latest count is then subtract 1,” so rapid or batched updates stay correct
    function decrement() {
        //setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}
