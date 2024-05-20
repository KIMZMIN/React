import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ReviewInsert(){
    //const formData2 = new FormData();

    let [formdata, setFormdata] = useState({writer:"", title:"", body:"", img:""});

    const navigation = useNavigate();
    //callAPI
    async function callAPI(){
        //formData2.append("title", formdata.title);
        //formData2.append("writer", formdata.writer);
        //formData2.append("body", formdata.body);
        //formData2.append("imgfile", formdata.img[0]);

        await axios.post(`http://localhost:3000/review`, formdata, 
        // {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     }}
        );
        setFormdata({writer:"", title:"", body:"", img:""});
        navigation("/reviewList");
    }
    
    const clickHandler = () => {
        callAPI();
    }

    return(
        <div>
            <table style={{width:"100%"}}> 
                <h4>글 등록</h4>
                <tr><td class="header">제목</td></tr>
                <tr><td><input className="form-control"  onChange={e=>{ setFormdata({...formdata, title:e.target.value})}}//
               type="text" name="title" placeholder="제목을 입력해주세요"></input></td></tr>
                <tr><td class="header">작성자</td></tr>
                <tr><td><input className="form-control" onChange={e=>{ setFormdata({...formdata, writer:e.target.value})}}//
               type="text" name="writer" placeholder="이름을 입력해주세요"></input></td></tr>
                <tr><td class="header">내용</td></tr>
                <tr><td><textarea className="form-control"onChange={e=>{ setFormdata({...formdata, body:e.target.value})}}//
                type="text" name="body" placeholder="내용을 입력해주세요" rows="3"></textarea></td></tr>
                <div class="mb-3">
                <label for="formFileSm" class="form-label">첨부파일</label>
                <input onChange={e=>{ setFormdata({...formdata, img:e.target.value})}}
                class="form-control form-control-sm" id="formFileSm" type="file"></input>
                </div>
        <button type='button' onClick={clickHandler} 
            className='btn btn-outline-info btn-sm mt-3'>등록</button>
            </table>
        </div>
    )
}

