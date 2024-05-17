//BoardInfo.js
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function BoardInfo(){
    const navigation = useNavigate();
    const goBack = () =>{navigation(-1)};
    const goHome = () =>{navigation("/")};
    const goList = () =>{navigation("/boardList")};

    //param
    const { boardId } = useParams();
    //state
    const [form, setForm ] = useState(
        {
            "id": 0,
            "title": "",
            "body": "",
            "date": "",
            "writer": ""
        }
    );
    //const {id, title, body, date, writer} = form;
    
    //Info 단건
    async function callAPI(){
        const board = await axios.get(`http://localhost:3000/board/${boardId}`);
        //console.log(board.status);
        setForm(board.data[0]);
    }
    //useEffect
    useEffect(()=>{
        callAPI();
    },[])
    
    
    //Delete
    async function callAPII(){
        await axios.delete(`http://localhost:3000/board/${boardId}`);
        goList();
    }
    const deleteHandler = ()=> {
        callAPII();
    }

   

    return (
        <>
        <div className="card" style={{width: "100%"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">작성자 : {form.writer}</li>
                <li className="list-group-item">작성날짜 : {form.date}</li>
            </ul>
            <div className="card-body">
                <h5 className="card-title">{form.title}</h5>
                <p className="card-text">{form.body}</p>
            </div>
            <div class="card-body">
                    <Link to={`/boardUpdate/${form.id}`} className="btn btn-outline-warning btn-sm me-2">수정</Link>
                    <button onClick={deleteHandler} className="btn btn-outline-warning btn-sm me-2">삭제</button>
                    <button onClick={goBack} className='btn btn-outline-dark btn-sm me-2'>뒤로가기</button>
                    <button onClick={goHome} className='btn btn-outline-dark btn-sm me-2'>홈으로</button>
            </div>
          </div>
        </>
    )
}