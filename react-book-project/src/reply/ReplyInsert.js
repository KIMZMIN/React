import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
 
 export default function ReplyInsert(){
    const navigation = useNavigate();
    const goReply = () =>{navigation(`/reviewList/${reviewId}`)};
    const { reviewId } = useParams();
    let [formdata, setFormdata] = useState({content:"", reviewno:`${reviewId}`});

    //callAPI
    async function callAPI(){
        await axios.post(`http://localhost:3000/reply`, formdata);
        setFormdata({content:"", reviewno:`${reviewId}`});
        goReply();
    }
    
    const clickHandler = () => {
        callAPI();
    }
    return (
    <>
        <h5>리뷰</h5>
        <div class="input-group mb-3">
        <input type="text" name="content" onChange={e=>{ setFormdata({...formdata, content:e.target.value})}}
        class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button onClick={clickHandler} class="btn btn-outline-secondary" type="button" id="button-addon2">등록</button>
        </div>
    </>)
 }