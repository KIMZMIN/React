import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
 
 export default function ReplyInsert(){
    const { reviewId } = useParams();
    let [formdata, setFormdata] = useState({replyid:"", score:"", content:"", reviewno:`${reviewId}`});

    //callAPI
    async function callAPI(){
        await axios.post(`http://192.168.0.13:3000/reply`, formdata);
        setFormdata({replyid:"", score:"", content:"", reviewno:`${reviewId}`});
    }
    
    const clickHandler = () => {
        callAPI();
    }
    return (
    <>
        <h5>한줄평</h5>
        <div className="input-group mb-2">
            <span className="input-group-text">닉네임</span>
            <input type="text" onChange={e=>{ setFormdata({...formdata, replyid:e.target.value})}}
            aria-label="First name" className="form-control"></input>
            <select class="form-select" id="inputGroupSelect01" onChange={e=>{ setFormdata({...formdata, score:e.target.value})}}>
                <option selected>점수를 선택해주세요</option>
                <option value="5">5점</option>
                <option value="4">4점</option>
                <option value="3">3점</option>
                <option value="2">2점</option>
                <option value="1">1점</option>
            </select>
        </div>
        <div className="input-group input-group-lg mb-3">
            <input type="text" name="content" onChange={e=>{ setFormdata({...formdata, content:e.target.value})}}
            className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button onClick={clickHandler} className="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
        </div>
    </>)
 }