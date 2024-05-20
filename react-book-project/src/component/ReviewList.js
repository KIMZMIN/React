import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "../style/List.css";


export default function ReviewBoardList(){
    const [reviews, setReview] = useState([]);
    const [loading, setLoading] = useState(false);

    const callAPI = async()=>{
        setLoading(true);
        const result = await axios.get('http://localhost:3000/review');
            setReview(result.data);
            setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    },[])

    if(loading) return <h1>loading..</h1>
    return(<>
    <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
        {reviews.map(r => 
            <tr key={r.no}>
                <td>{r.no}</td>
                <td><Link to={`/reviewList/${r.no}`} className="tdLink">{r.title}</Link></td>
                <td>{r.writer}</td>
                <td>{r.date}</td>
            </tr>)}
        </tbody>
    </table>
    </>);
}