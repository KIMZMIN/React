import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ReviewInsert(){

    let [formdata, setFormdata] = useState({writer:"", title:"", body:"", img:null, category:""});

    const navigation = useNavigate();
    //callAPI
    async function callAPI(){
        const formData2 = new FormData();
        formData2.append("title", formdata.title);
        formData2.append("writer", formdata.writer);
        formData2.append("body", formdata.body);
        formData2.append("category", formdata.category);
        
        // 첨부파일이 있는 경우에만 추가
        if(formdata.img) {
            formData2.append("imgfile", formdata.img);
        }

        await axios.post(`http://192.168.0.13:3000/review`, formData2, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
        });

        setFormdata({writer:"", title:"", body:"", img:null, category:""});
        navigation("/reviewList");
    }

    const clickHandler = () => {
        callAPI();
    }
    const fileChangeHandler = (e) => {
        setFormdata({...formdata, img: e.target.files[0]});
    }
    return(
        <div>
            <form class="" action="" method="post" enctype="multipart/form-data">
            <table style={{width:"100%"}}> 
                <h4>도서등록</h4>
                <tr><td className="header">책 제목</td></tr>
                <tr><td><input className="form-control mb-2" onChange={e=>{ setFormdata({...formdata, title:e.target.value})}}//
               type="text" name="title" placeholder="제목을 입력해주세요"></input></td></tr>
                <tr><td class="header">저자</td></tr>
                <tr><td><input className="form-control mb-2" onChange={e=>{ setFormdata({...formdata, writer:e.target.value})}}//
               type="text" name="writer" placeholder="이름을 입력해주세요"></input></td></tr>
                <tr><td className="header">카테고리</td></tr>
                <select className="form-select mb-2" id="inputGroupSelect01" onChange={e=>{ setFormdata({...formdata, category:e.target.value})}}>
                    <option selected>카테고리를 선택해주세요</option>
                    <option value="시">시</option>
                    <option value="소설">소설</option>
                    <option value="에세이">에세이</option>
                    <option value="자연과학">자연과학</option>
                    <option value="IT">IT</option>
                </select>
                <tr><td class="header">책 소개</td></tr>
                <tr><td><textarea className="form-control mb-2"onChange={e=>{ setFormdata({...formdata, body:e.target.value})}}//
                type="text" name="body" placeholder="내용을 입력해주세요" rows="3"></textarea></td></tr>
                <div class="mb-3">
                <label for="formFileSm" className="form-label">책표지</label>
                <input onChange={fileChangeHandler}
                class="form-control form-control-sm" id="formFileSm" type="file"></input>
                </div>
                <button type='button' onClick={clickHandler} 
                className='btn btn-outline-info mt-1'>등록</button>
            </table>
            </form>
        </div>
    )
}

