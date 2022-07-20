import React, { useReducer } from 'react'

const initialState = {
  count: 0
}
function myreducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { ...state, count: state.count - 1 }
    default:
      // throw new Error();
      return state
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(myreducer, initialState);
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>&nbsp;
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
    </div>
  )
}

export default Reducer