import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReplyList(){
    const [replys, setReply] = useState([]);

    const callAPI = async()=>{
        const result = await axios.get(`http://localhost:3000/reply`);
        setReply(result.data);
    }

    useEffect(()=>{
        callAPI();
    },[])
    return(<>
    <h5>리뷰</h5>
            <tr>
                <th>#</th>
                <th>글번호</th>
                <th>내용</th>
                <th>작성일</th>
            </tr>
    {replys.map(rp => 
            <tr key={rp.replyno}>
                <td>{rp.replyno}</td>
                <td>{rp.reviewno}</td>
                <td>{rp.content}</td>
                <td>{rp.date}</td>
            </tr>)}
    </>);
}