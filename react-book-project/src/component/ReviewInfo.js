import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReplyInfo from "../reply/ReplyInfo";
import ReplyInsert from "../reply/ReplyInsert";

export default function ReviewInfo(){
    const navigation = useNavigate();
    const goBack = () =>{navigation("/reviewList")};
    const goHome = () =>{navigation("/")};
    const goList = () =>{navigation("/reviewList")};

    //param
    const { reviewId } = useParams();
    //state
    const [form, setForm ] = useState(
        {
            "no": 0,
            "title": "",
            "body": "",
            "writer": "",
            "date": "",
        }
    );
    
    //Info 단건
    async function callAPI(){
        const review = await axios.get(`http://localhost:3000/review/${reviewId}`);
        setForm(review.data[0]);
        console.log(review.data[0]);
    }
    //useEffect
    useEffect(()=>{
        callAPI();
    },[])
    
    
    //Delete
    async function callAPII(){
        await axios.delete(`http://localhost:3000/review/${reviewId}`);
        goList();
    }
    const deleteHandler = ()=> {
        callAPII();
    }

    return (
        <>
        <div className="card mb-4" style={{width: "100%"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">작성자 : {form.writer}</li>
                <li className="list-group-item">작성일 : {form.date}</li>
            </ul>
            <div className="card-body">
                <h5 className="card-title">{form.title}</h5>
                <p className="card-text">{form.body}</p>
                <img src={form.img} class="card-img-top" alt="..."></img>
            </div>
            <div class="card-body">
                    <Link to={`/reviewUpdate/${form.no}`} className="btn btn-outline-warning btn-sm me-2">수정</Link>
                    <button onClick={deleteHandler} className="btn btn-outline-warning btn-sm me-2">삭제</button>
                    <button onClick={goBack} className='btn btn-outline-dark btn-sm me-2'>뒤로가기</button>
                    <button onClick={goHome} className='btn btn-outline-dark btn-sm me-2'>홈으로</button>
            </div>
          </div>
          <ReplyInsert/>
          <ReplyInfo/>
        </>
    )
}