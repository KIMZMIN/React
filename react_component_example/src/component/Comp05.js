import { useState } from "react";

function Comp05(){
    let [color, setColor] = useState('black');
    const changeColor = (c)=> {
        setColor(c); 
    }
    let [msg, setMsg] = useState('안녕하세요');
    const setMessage = (m)=>{
        setMsg(m)
    }
    return(
        <>
          <button onClick={(e)=>setMessage('안녕하세요')}>입장</button>
          <button onClick={(e)=>setMessage('안녕히가세요')}>퇴장</button>
          <h1 style={{backgroundColor: color, color: 'white'}}>
            {msg}</h1>
          <button onClick={(e)=>setColor('black')}>기본</button>
          <button onClick={(e)=>setColor('red')}>빨강</button>
          <button onClick={(e)=>changeColor('blue')}>파랑</button>
          <button onClick={(e)=>changeColor('yellow')}>노랑</button>
        </>
    )
}

export default Comp05;