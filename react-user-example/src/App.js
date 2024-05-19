import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import UserList from './components/UserList';


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
              <li className="nav-item"><NavLink className="nav-link" to="/userList">회원전체조회</NavLink></li>
           </ul>
        </div>
        <div className='col-7'>
          <div class="card">
            <div class="card-body">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/userList" element={<UserList/>}/>
                </Routes>
             </div>
            </div>
        </div>
      </div> {/*====== row */}
    </div>
  );
}

export default App;
