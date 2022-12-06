import React from 'react'
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import Form from "./components/Form";



function App(props) {

  // const taskList = props.tasks?.map((task) => task.name)
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id} />
  ));




  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <div className="filters btn-group stack-exception">
        <FilterButton />

        {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
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
        </button> */}
      </div>

      <h2 id="list-heading">
        3 tasks remaining
      </h2>

      <ul
      // role="list"
      // className="todo-list stack-large stack-exception"
      // aria-labelledby="list-heading"
      >
        {taskList}

        {/* <Todo name="eat" completed={true} id="todo-0" />
        <Todo name="sleep" completed={false} id="todo-1" />
        <Todo name="repeat" completed={false} id="todo-2" /> */}

      </ul>
    </div>
  );
}

export default App;