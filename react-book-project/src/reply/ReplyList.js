import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function ReplyList(){
    const [replys, setReply] = useState([]);

    const callAPI = async()=>{
        const result = await axios.get(`http://192.168.0.13:3000/reply`);
        setReply(result.data);
    }

    useEffect(()=>{
        callAPI();
    },[])
    return(<>
    <h5>한줄평</h5>
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">책번호</th>
      <th scope="col">한줄평</th>
      <th scope="col">점수</th>
      <th scope="col">작성일</th>
    </tr>
  </thead>
  <tbody>
  {replys.map(rp => 
            <tr key={rp.replyno}>
                <td><Link to={`/reviewList/${rp.reviewno}`} className="tdLink">{rp.reviewno}</Link></td>
                <td>{rp.content}</td>
                <td>{rp.score}점</td>
                <td>{rp.date}</td>
            </tr>)}
    </tbody>
   
            
    
    </table>
    </>);
}