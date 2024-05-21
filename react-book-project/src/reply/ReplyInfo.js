import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReplyDelete from "./ReplyDelete";

export default function ReplyInfo(){
    //param
    const { reviewId } = useParams();
  
    //state
    const [replys, setReply] = useState([]);
    //Info 단건
    async function callAPI(){
        const reply = await axios.get(`http://192.168.0.13:3000/reply/${reviewId}`);
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
            <li key={rp.replyno} className="list-group-item mt-1">{rp.replyid}　|　{rp.score + '점'}　|　{rp.date} 　<ReplyDelete no={rp.replyno}/><br></br>
            <h5 className="mt-3">{rp.content}</h5> </li>)}
            </ul>
          </div>
        </>
    )
}