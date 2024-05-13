function Form(){
  return (
    <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
    </form>
  )
}
function Button(){
  return (
     <div className="filters btn-group stack-exception">
     <button type="button" className="btn toggle-btn" aria-pressed="true">
       <span className="visually-hidden">Show </span>
       <span>all</span>
       <span className="visually-hidden"> tasks</span>
     </button>
     <button type="button" className="btn toggle-btn" aria-pressed="false">
       <span className="visually-hidden">Show </span>
       <span>Active</span>
       <span className="visually-hidden"> tasks</span>
     </button>
     <button type="button" className="btn toggle-btn" aria-pressed="false">
       <span className="visually-hidden">Show </span>
       <span>Completed</span>
       <span className="visually-hidden"> tasks</span>
     </button>
   </div>
  )
}

function TodoList(props){
   return(
    <div>
      <ul>
      <li className="todo stack-small">
        <div className="c-cb">
          <input id={props.id} type="checkbox" defaultChecked={props.completed} />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    </ul>
    </div>
  )
}

function Todo(props) {
  const taskList = props.tasks.map((task) => (
    <TodoList id={task.id} name={task.name} 
    completed={task.completed} key={task.id}
    />
  ));
  return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form/>
        <Button/>
        <h2 id="list-heading">3 tasks remaining</h2>
        {taskList}
      </div>
    );
  }

  export default Todo;