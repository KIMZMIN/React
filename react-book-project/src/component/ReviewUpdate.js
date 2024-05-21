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
            "writer": "",
            "category": ""
        }
    );
    async function callAPI(){
        const review = await axios.get(`http://192.168.0.13:3000/review/${reviewId}`);
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
    let {title, body, writer, category} = form;

    //callAPI
    async function callAPII(){
        await axios.put(`http://192.168.0.13:3000/review/${reviewId}`, {title, body, writer, category});
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
        <div className="card-body row">
            <div className="col-3">
                <img src={`http://192.168.0.13:3000/uploads/${form.img}`} className="bookInfoimg" alt="..."></img>
            </div>
            <div className="col-9">  
                <p className="card-text"><input defaultValue={writer}  onChange={e=>{ setForm({...form, writer:e.target.value})}}
                className="form-control" type="text" aria-label="default input example"></input></p>
                 <select className="form-select mb-2" id="inputGroupSelect01" onChange={e=>{ setForm({...form, category:e.target.value})}}>
                    <option selected>카테고리를 선택해주세요</option>
                    <option value="시">시</option>
                    <option value="소설">소설</option>
                    <option value="에세이">에세이</option>
                    <option value="자연과학">자연과학</option>
                    <option value="IT">IT</option>
                </select>
                <p className="card-text"><textarea defaultValue={body}  onChange={e=>{ setForm({...form, body:e.target.value})}}
                className="form-control mt-3" type="text" aria-label="default input example" rows={5}></textarea></p>
            </div>
        </div>
        <div class="card-body">
        <button onClick={clickHandler} className="btn btn-outline-warning btn-sm me-2">저장</button>
        </div>
      </div>
      </>
    )
}