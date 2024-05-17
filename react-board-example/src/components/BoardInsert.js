// BoardInsert.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function BoardInsert(){
    let [formdata, setFormdata] = useState({writer:"", title:"", body:""});
    let {writer, title, body} = formdata;

    const navigation = useNavigate();
    //callAPI
    async function callAPI(){
        await axios.post(`http://localhost:3000/board`, formdata);
        setFormdata({writer:"", title:"", body:""});
        navigation("/boardList");
    }
    
    const clickHandler = () => {
        callAPI();
    }

    return(
        <div>
            <h3>글등록</h3>
            <div className="form-floating mb-2">
               <input className="form-control" value={writer} onChange={e=>{ setFormdata({...formdata, writer:e.target.value})}}//
               type="text" name="writer" placeholder="내용입력"></input>
               <label for="floatingInput">작성자</label>
            </div>
            <div className="form-floating mb-2">
               <input className="form-control" value={title} onChange={e=>{ setFormdata({...formdata, title:e.target.value})}}//
               type="text" name="title" placeholder="내용입력"></input>
                <label for="floatingInput">제목</label>
            </div>
            <div className="form-floating mb-2">
                <input className="form-control" value={body} onChange={e=>{ setFormdata({...formdata, body:e.target.value})}}//
                type="text" name="body" placeholder="내용입력" ></input>
                 <label for="floatingInput">내용</label>
            </div>
             <p>작성자: {writer}</p>
             <p>제목: {title}</p>
             <p>내용: {body} </p>
        
        <button type='button' onClick={clickHandler} 
            className='btn btn-outline-info btn-sm'>확인</button>
        </div>
    )
}

export default BoardInsert;