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
     </div>
  )
}
function Todo({todo}){
  return(
    <ul>
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            내용
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
)
}
function TodoList(props){
  //  let lis =[];
  //  props._2.forEach(t => {
  //    lis.push(<Todo todo={t.name}/>)
  //  });
  
   return(
    <div>
       <Todo/>
    </div>
  )
  
  
}
function TodoTable(_1) {
  return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form/>
        <Button/>
        <h2 id="list-heading">3 tasks remaining</h2>
        <TodoList _2={_1.data}/>
      </div>
    );
  }

  export default TodoTable;