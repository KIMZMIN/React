import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "../style/List.css";


export default function ReviewBoardList(){
    const [reviews, setReview] = useState([{
        "no": 0,
        "title": "",
        "body": "",
        "writer": "",
        "date": "",
        "img": null
    }]);
    const [loading, setLoading] = useState(false);

    const callAPI = async()=>{
        setLoading(true);
        const result = await axios.get('http://192.168.0.13:3000/review');
            setReview(result.data);
            setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    },[])

    if(loading) return <h1>loading..</h1>

    
    return(<>
    <div className="mb-3">
        <h3 className="bookListTitle">[ 신간도서 ]</h3>
    </div>
    {reviews.map(r =>
        <div className="card bookListdiv">
             <div>
             <Link to={`/reviewList/${r.no}`} className="tdLink"><img src={`http://192.168.0.13:3000/uploads/${r.img}`} className="bookListimg card-img-top" alt="..."></img></Link>
             </div>
            <div className="card-body">
            <p className="card-text bookListp">{r.title}</p>
            </div>
        </div>
       )}
    </>);
}