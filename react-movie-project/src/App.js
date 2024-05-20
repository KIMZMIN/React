import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import MovieHome from './components/MovieHome';

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
              <li className="nav-item"><NavLink className="nav-link" to="/">movie Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/mvBoardList">영화게시판</NavLink></li>
           </ul>
        </div>
        <div className='col-7'>
          <div class="card">
            <div class="card-body">
                <Routes>
                  <Route path="/" element={<MovieHome/>}/>
                </Routes>
             </div>
            </div>
        </div>
      </div> {/*====== row */}
    </div>
  );
}

export default App;
