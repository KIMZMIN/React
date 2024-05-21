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
import ReplyDelete from './reply/ReplyDelete';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h2 className="h2font">도서정보시스템</h2>
        </div>
      </nav>
      <div className='row'>
        <div className='col-2'>
          <ul className="nav flex-column">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/reviewList">신간도서</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/reviewInsert">도서등록</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/replyList">한줄평</NavLink></li>
           </ul>
        </div>
        <div className='col-10'>
          <div className="card" style={{width: '1095px'}}>
            <div className="card-body">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/reviewList" element={<ReviewList/>}/>
                  <Route path="/reviewList/:reviewId/*" element={<ReviewInfo/>}/>
                  <Route path="/reviewUpdate/:reviewId" element={<ReviewUpdate/>}/>
                  <Route path="/reviewInsert" element={<ReviewInsert/>}/>
                  <Route path="/replyList" element={<ReplyList/>}/>
                  <Route path="/replyList/:reviewId" element={<ReplyInfo/>}/>
                  <Route path="/replyInsert" element={<ReplyInsert/>}/>
                  <Route path="/replyDelete/:replyno" element={<ReplyDelete/>}/>
                </Routes>
             </div>
            </div>
        </div>
      </div> {/*====== row */}
    </div>
  );
}

export default App;
