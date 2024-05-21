import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useParams, useNavigate } from "react-router-dom";

export default function ReplyDelete(props){
    // const { reviewId } = useParams();
    // const navigation = useNavigate();
    //const reloadReply = () =>{navigation(`/reviewList/${reviewId}`)};

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

    const replyno = props.no;
    //Delete
    async function callAPII(){
        await axios.delete(`http://192.168.0.13:3000/reply/${replyno}`);
        //navigation(`/reviewList/${reviewId}`);
    }
    const deleteHandler = ()=> {
        callAPII();
    }

    return(
        <>
        <span onClick={deleteHandler}>x</span>
        </>
    );
}