import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function ReviewUpdate(){
    const navigation = useNavigate();

    //=================
    //    단건 get 
    //=================
    const { reviewId } = useParams();
    const [form, setForm ] = useState(
        {
            "no": 0,
            "title": "",
            "body": "",
            "date": "",
            "writer": ""
        }
    );
    async function callAPI(){
        const review = await axios.get(`http://localhost:3000/review/${reviewId}`);
        //console.log(board.status);
        setForm(review.data[0]);
    }
    
    //useEffect
    useEffect(()=>{
        callAPI();
    },[])
    
    //=================
    //    update
    //=================
    let {title, body, writer} = form;

    //callAPI
    async function callAPII(){
        await axios.put(`http://localhost:3000/review/${reviewId}`, {title, body, writer});
        navigation(`/reviewList/${reviewId}`);
    }
    const clickHandler = () => {
        callAPII();
    }

    return(<>
        <div className="card mb-4" style={{width: "100%"}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><input defaultValue={title} onChange={e=>{ setForm({...form, title:e.target.value})}} 
            className="form-control form-control-lg mb-2" type="text" aria-label=".form-control-lg example"></input></li>
        </ul>
        <div className="card-body">
            <img src={`http://localhost:3000/uploads/${form.img}`} className="bookInfoimg" alt="..."></img>
            <p className="card-text"><input defaultValue={body}  onChange={e=>{ setForm({...form, body:e.target.value})}}
            className="form-control" type="text" aria-label="default input example"></input></p>
            <p className="card-text"><input defaultValue={writer}  onChange={e=>{ setForm({...form, writer:e.target.value})}}
            className="form-control" type="text" aria-label="default input example"></input></p>
        </div>
        <div class="card-body">
        <button onClick={clickHandler} className="btn btn-outline-warning btn-sm me-2">저장</button>
        </div>
      </div>
      </>
    )
}