import { useEffect } from "react"
import { useReducer, useState } from "react"

  let reservoir = {
      temperature: 28,
      oxygenLevel: 8
    }

  let setReservoir = (state, action)=>{
    switch(action.type){
      case "TEMP_UP":
        return {...state, temperature:state.temperature+1}
      case "TEMP_DOWN":
        return {...state, temperature: state.temperature-1}
      case "ADD_O2":
        return{...state, oxygenLevel: state.oxygenLevel+2}
      default:
        return state 
    }
  }

function App() {
  const[state, dispatch] = useReducer(setReservoir, reservoir);

  const[fishCount, setFishCount] = useState(0);
  const[isConnecting, changeConnection] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setFishCount(150)
      changeConnection(false)
    },3000);
  },[])

  return (
    <>
    <section>
      <div>
        <h1>Dashboard</h1>
        <p>Temperature  : {state.temperature}</p>
        <p>Oxigen Level : {state.oxygenLevel}</p>

        <button onClick={()=> dispatch({type: "TEMP_UP"})}>Increase Temperature(+1)</button>
        <button onClick={()=> dispatch({type:"TEMP_DOWN"})}>Diccrease Temperature(-1)</button>
        <button onClick={()=> dispatch({type:"ADD_O2"})}>ADD Oxygens(+2)</button>
      </div>
    </section>
    <section>
      <p>Fish Count: {fishCount}</p>
      <p>Connection: {isConnecting?"Connecting...":"Connected"}</p>
    </section>
      
    </>
  )
}

export default App
