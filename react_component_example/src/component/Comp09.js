import { useState, useRef, useEffect } from 'react';

export default function Comp09(){
    // let [username, setUsername] = useState('');
    // let [address, setAddress] = useState('');
    let [formdata, setFormdata] = useState({username:"", address:""});
    let txtUsername = useRef(null);
    let {username, address} = formdata;
    
    useEffect(()=>{txtUsername.current.focus();}, []) //useEffect >>> name_input_focus 

    const clickHandler = ()=>{
        //username + address 결과를 alert
        alert('이름: ' + username + ' 주소: ' + address);
        //input 초기화
        setFormdata({username:"", address:""});
        //username input 에 focus 넣기
        txtUsername.current.focus();
    }
    const keyDownHandler = (e)=>{
        if( e.key === 'Enter'){
            clickHandler(); //엔터누르면 clickHandler 실행 
        }
    }

    //current 그 태그
    return (<>
        <input value={username} onChange={e=>{ setFormdata({...formdata, username:e.target.value})}}//
               ref={txtUsername} type="text" name="username" placeholder="이름을 입력해주세요 🥺"></input>
        <h3>이름: {username}</h3>
        
        <input value={address} onChange={e=>{ setFormdata({...formdata, address:e.target.value})}}//
                onKeyDown={keyDownHandler}
                type="text" name="address" placeholder="주소 입력💀" ></input>
        <h3>주소: {address} </h3>
        
        <button type='button' onClick={clickHandler}>확인</button>
    </>)
}