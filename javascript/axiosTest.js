//=============
//axiosTest.js
//=============

const axios = require("axios");  //node 에서는 commonjs 임. => require
const url='https://jsonplaceholder.typicode.com/todos';

//todoget();
//todoPost();
//todoPut();
todoDelete();

function todoDelete(){
    axios.delete(url + "/1") 
    .then(res=> console.log(res.data));
}

function todoPut(){
    const param = {title: 'react study~!!'} //바꿀 내용
    axios.put(url + "/1", param) 
         .then(res=> console.log(res.data));
}

function todoPost(){
    const param = { userId: 1, title: 'react study~!!', completed: false }
    axios.post(url, param)
         .then(res=> console.log(res.data));
}

function todoget(){
    axios.get("https://jsonplaceholder.typicode.com/todos/1")//,{넘겨줄 파라미터})
    .then(res=> console.log(res.data))
}

