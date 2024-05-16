import React from 'react';
import { Route , Routes, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Card, CardBody} from 'react-bootstrap';

const SimpleButton = styled.button`
  color: white;
  background-color: purple;
`;
//상속받은 컴포넌트
const LargeButton = styled(SimpleButton)`
  background-color: orange;
  font-size: 2rem;
  margin: 20px;
`
function ReactButton(props){
  return <button className={props.className}>{props.children}버퉁</button>
}

const ReactLargeButton = styled(ReactButton)`
  background-color: rgb(255, 47, 127);
  font-size: 25px;
  margin: 20px;
`
function Home() {
  const style = {fontSize:"3rem"}
  return (
    <div>
      <h2>HOme</h2>
      <div style={style}>HOME</div>
      <div style={ {color:"tomato"}}>TOmAtO🍅</div>
      <SimpleButton>Simple Button</SimpleButton>
      <LargeButton>Large Button</LargeButton>
      <ReactButton>첫번째 자식</ReactButton>
      <ReactButton>두번째 자식</ReactButton>
      <ReactLargeButton>막내ㅋ</ReactLargeButton>
    </div>
  );
}

const contents = [
  {id:1, title:'HTML', description: 'html...'},
  {id:2, title:'CSS', description: 'CsS...'},
  {id:3, title:'js', description: 'JSs...'}
];

function Topic(){
  //id가 같으면 그 id의 제목, 내용 넣음 => 😀 으로 이동
  const params = useParams();
  console.log(params)
  const topic_id = Number([params.topic_id])
  const topic = contents.find(c=> c.id === topic_id )

  //button goBack & goHome
  const navigation = useNavigate();
  const goBack = () =>{navigation(-1)};
  const goHome = () =>{navigation("/topics")};

  return (
    <div> 
      {/* 😀 여기 */}
      <h2>{topic.title}</h2>
      {topic.description}
      <div className='m-3'>
          <button onClick={goBack} className='btn btn-success me-3'>뒤로가기</button>
          <button onClick={goHome} className='btn btn-info'>홈으로</button>
      </div>
    </div>
  )
}

function Topics() {
    return (
    <div>
      <h2>Topics</h2>
          <ul className="nav nav-tabs">
            {contents.map((content)=>
              <li key={content.id} className="nav-item"><NavLink className="nav-link active" to={"/topics/" + content.id}>
                {content.title}</NavLink></li>
            )}
          </ul>
          <Routes>
            <Route path="/:topic_id" element={<Topic/>}/>
          </Routes>
    </div>
  );
}

//주소창에 localhost:3000/contact?name=zi&age=20 하면 search.get("name") 안에 들어감
function Contact() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return (
    <div>
      <h2>Contact</h2>
      <div>이름 : {search.get("name")}</div>
      <div>나이 : {search.get("age")}</div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h2>MY APP</h2>
        </div>
      </nav>
      <div className='row'>
        <div className='col-4'>
          <ul className="nav flex-column">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/topics">Topics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/todo">todo</NavLink></li>
          </ul>
        </div>
        <div className='col-7'>
          <Card>
            <CardBody>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/topics/*" element={<Topics/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
             </CardBody>
          </Card>  
        </div>
      </div>
    </div>
  );
}


export default App;
