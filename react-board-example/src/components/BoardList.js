import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


function BoardList(){
    const [boards, setBoard] = useState([]);
    const [loading, setLoading] = useState(false);

    const callAPI = async()=>{
        setLoading(true);
        const result = await axios.get('http://localhost:3000/board');
            setBoard(result.data);
            setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    },[])

    if(loading) return <h1>로딩중입니다...</h1>
    // useEffect(()=>{
    //     fetch('http://localhost:3000/board')
    //     .then(response => response.json())
    //     .then(json => {console.log(json); setBoard(json);})
    // },[])
    return(<>
    <h3>BoardList </h3>
    <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성날짜</th>
            </tr>
        </thead>
        <tbody>
        {boards.map(b => 
            <tr key={b.id}>
                <td><Link to={`/boardList/${b.id}`}>{b.id}</Link></td>
                <td>{b.title}</td>
                <td>{b.writer}</td>
                <td>{b.date}</td>
            </tr>)}
        </tbody>
    </table>
    </>);
}

export default BoardList;