import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import BoardList from "./components/BoardList";
import BoardInsert from "./components/BoardInsert";
import BoardInfo from "./components/BoardInfo";
import BoardUpdate from './components/BoardUpdate';



function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h2>★</h2>
        </div>
      </nav>
      <div className='row'>
        <div className='col-4'>
          <ul className="nav flex-column">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/boardList">전체조회</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/boardInsert">글 등록</NavLink></li>
           </ul>
        </div>
        <div className='col-7'>
          <div class="card">
            <div class="card-body">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/boardList" element={<BoardList/>}/>
                  <Route path="/boardInsert" element={<BoardInsert/>}/>
                  <Route path="/boardList/:boardId" element={<BoardInfo/>}/>
                  <Route path="/boardUpdate/:boardId" element={<BoardUpdate/>}/>
                </Routes>
             </div>
            </div>
        </div>
      </div> {/*====== row */}
    </div> 
  );
}

export default App;
