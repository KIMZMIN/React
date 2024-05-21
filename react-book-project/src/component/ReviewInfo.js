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
            "img": null
        }
    );
    
    //Info 단건
    async function callAPI(){
        const review = await axios.get(`http://192.168.0.13:3000/review/${reviewId}`);
        setForm(review.data[0]);
        console.log(review.data[0]);
    }
    //useEffect
    useEffect(()=>{
        callAPI();
    },[])
    
    
    //Delete
    async function callAPII(){
        await axios.delete(`http://192.168.0.13:3000/review/${reviewId}`);
        goList();
    }
    const deleteHandler = ()=> {
        callAPII();
    }
    return (
        <>
        <div className="card mb-4" style={{width: "100%"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item infoTitle">{form.title}</li>
            </ul>
            <div className="card-body row">
                <div className="col-3">
                    <img src={`http://192.168.0.13:3000/uploads/${form.img}`} className="bookInfoimg" alt="..."></img>
                </div>
                <div className="col-9">
                    <p className="card-text">저자　:　{form.writer}　|　카테고리　:　{form.category}</p>
                    <p className="card-text">{form.body}</p>
                </div>
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