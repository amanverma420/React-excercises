import { useState } from "react";

function Counterapp() {
    var [count ,setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counterapp;
