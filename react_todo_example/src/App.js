import './App.css';
import Todo from './Todo1';

function App() {

  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

  return (
    <div>
      <Todo tasks={DATA}/>
    </div>
  );
}

export default App;
