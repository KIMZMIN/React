import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./component/Home";
import ReviewList from "./component/ReviewList";
import ReviewInfo from "./component/ReviewInfo";
import ReviewUpdate from './component/ReviewUpdate';
import ReviewInsert from './component/ReviewInsert';
import ReplyList from './reply/ReplyList';
import ReplyInfo from './reply/ReplyInfo';
import ReplyInsert from './reply/ReplyInsert';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h2>★</h2>
        </div>
      </nav>
      <div className='row'>
        <div className='col-4'>
          <ul className="nav flex-column">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/reviewList">후기게시판</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/reviewInsert">글등록</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/replyList">댓글전체</NavLink></li>
           </ul>
        </div>
        <div className='col-7'>
          <div class="card">
            <div class="card-body">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/reviewList" element={<ReviewList/>}/>
                  <Route path="/reviewList/:reviewId" element={<ReviewInfo/>}/>
                  <Route path="/reviewUpdate/:reviewId" element={<ReviewUpdate/>}/>
                  <Route path="/reviewInsert" element={<ReviewInsert/>}/>
                  <Route path="/replyList" element={<ReplyList/>}/>
                  <Route path="/replyList/:reviewId" element={<ReplyInfo/>}/>
                  <Route path="/replyInsert" element={<ReplyInsert/>}/>
                </Routes>
             </div>
            </div>
        </div>
      </div> {/*====== row */}
    </div>
  );
}

export default App;
