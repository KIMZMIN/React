import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ReplyInfo(){
    //param
    const { reviewId } = useParams();
  
    //state
    const [replys, setReply] = useState([]);
    //Info 단건
    async function callAPI(){
        const reply = await axios.get(`http://localhost:3000/reply/${reviewId}`);
        setReply(reply.data);
        console.log(reply.data);
    }
    //useEffect
    useEffect(()=>{
        callAPI();
    },[])

    return (
        <>
        
        <div className="card mb-4" style={{width: "100%"}}>
            <ul className="list-group list-group-flush">
            {replys.map(rp => 
            <li className="list-group-item">{rp.replyno} | {rp.date} <span>x</span><br></br>
            {rp.content} </li>)}
            
                {/* 
                // <li className="list-group-item">작성일 : {rp.date}</li>
                // <li className="list-group-item">작성내용 : {rp.content}</li>} */}
                {/* {replys.map(rp => 
                <tr key={rp.replyno}>
                    <td>{rp.replyno}</td>
                    <td>{rp.date}</td>
                    <td>{rp.content}</td>
                </tr>)}  */}
            </ul>
          </div>
        </>
    )
}