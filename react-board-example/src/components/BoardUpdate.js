// boardUpdate.js
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate(){
    const navigation = useNavigate();

    //=================
    //    단건 get 
    //=================
    const { boardId } = useParams();
    const [form, setForm ] = useState(
        {
            "id": 0,
            "title": "",
            "body": "",
            "date": "",
            "writer": ""
        }
    );
    async function callAPI(){
        const board = await axios.get(`http://localhost:3000/board/${boardId}`);
        //console.log(board.status);
        setForm(board.data[0]);
    }
    
    //useEffect
    useEffect(()=>{
        callAPI();
    },[])
    
    //=================
    //    update
    //=================
    let {title, body} = form;

    //callAPI
    async function callAPII(){
        await axios.put(`http://localhost:3000/board/${boardId}`, {title, body});
        navigation(`/boardList/${boardId}`);
    }
    const clickHandler = () => {
        callAPII();
    }

    return(
        <div className="card" style={{width: "100%"}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">작성자 : {form.writer}</li>
            <li className="list-group-item">작성날짜 : {form.date}</li>
        </ul>
        <div className="card-body">
            <input defaultValue={title} onChange={e=>{ setForm({...form, title:e.target.value})}} 
            className="form-control form-control-lg mb-2" type="text" aria-label=".form-control-lg example"></input>
            <input defaultValue={body}  onChange={e=>{ setForm({...form, body:e.target.value})}}
            className="form-control" type="text" aria-label="default input example"></input>
        </div>
        <div class="card-body">
        <button onClick={clickHandler} className="btn btn-outline-warning btn-sm me-2">저장</button>
        </div>
        </div>
    )
}