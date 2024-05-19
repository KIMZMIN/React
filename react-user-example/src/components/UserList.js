import { useState, useEffect, } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

export default function UserList(){
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const callAPI = async()=>{
        setLoading(true);
        const result = await axios.get('http://localhost:3000/userList/');
            setUser(result.data);
            setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    },[])
    if(loading) return <h1>로딩중입니다...</h1>
    return(<>
        <h3>userList</h3>
        <table className="table">
        <thead>
            <tr>
                <th>회원번호</th>
                <th>회원아이디</th>
                <th>이름</th>
                <th>이메일</th>
                <th>전화번호</th>
                <th>가입날짜</th>
            </tr>
        </thead>
        <tbody>
        {users.map(u => 
            <tr key={u.no}>
                <td><Link to={`/userList/${u.uid}`}>{u.uid}</Link></td>
                <td>{u.uname}</td>
                <td>{u.email}</td>
                <td>{u.date}</td>
            </tr>)}
        </tbody>
    </table>
    </>
    )
}