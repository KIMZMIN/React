// Event  // useState
import { useState } from "react";

function Comp(){

    let [count, setCount] = useState(10);
    const onIncrease = ()=>{
        setCount(count+1);
    }
    
    function onDecrease(){
        setCount(count-1);
    }
    return (
        <>
          <h3>Comp04</h3>
          <h2>{count}</h2>
          <div>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
          </div>
        </>
    )
}

export default Comp;