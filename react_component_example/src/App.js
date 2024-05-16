import Comp01 from "./component/Comp01";
import Comp02 from "./component/Comp02";
import Comp03 from "./component/Comp03";
import Comp04 from "./component/Comp04";
import Comp05 from "./component/Comp05";
import Comp06 from "./component/Comp06";
import Comp07 from "./component/Comp07";
import { Routes, Route, NavLink } from "react-router-dom";
import {Card, CardBody} from 'react-bootstrap';

function App() {
  const prod = [
    {no:1, name:"aa", price: 100},
    {no:2, name:"bb", price: 500},
    {no:3, name:"cc", price: 700},
  ]
  
  // const DATA = [
  //   { id: "todo-0", name: "Eat", completed: true },
  //   { id: "todo-1", name: "Sleep", completed: false },
  //   { id: "todo-2", name: "Repeat", completed: false },
  // ];
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
            <li className="nav-item"><NavLink className="nav-link" to="/Comp01">Comp01</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Comp02">Comp02</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Comp03">Comp03</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Comp04">Comp04</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Comp05">Comp05</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Comp06">Comp06</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Comp07">Comp07</NavLink></li>
          </ul>
        </div>
        <div className='col-7'>
          <Card>
            <CardBody>
              <Routes>
                <Route path="/Comp01" element={<Comp01/>}/>
                <Route path="/Comp02" element={<Comp02/>}/>
                <Route path="/Comp03" element={<Comp03 prod={prod}/>}/>
                <Route path="/Comp04" element={<Comp04/>}/>
                <Route path="/Comp05" element={<Comp05/>}/>
                <Route path="/Comp06" element={<Comp06/>}/>
                <Route path="/Comp07" element={<Comp07/>}/>
              </Routes>
             </CardBody>
          </Card>  
        </div>
      </div>
    </div>
  );
}

export default App;
