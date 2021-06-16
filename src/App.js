import React, {useState} from 'react';
import './App.css';
import Todo from './components/A_Todo';
import Form from './components/B_Form';
import FilterButton from './components/C_FilterButton';

let FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
let FILTER_NAMES = Object.keys(FILTER_MAP);
console.log(FILTER_NAMES);

function App(props) {
  let [tasks, setTask] = useState(props.tasks);
  let [filter, setFilter] = useState("All");

  //keep datalist files on the index.js since, this place is with lot of lines.
  //console.log(props.tasks);

  //fix toggling (check/uncheck) because only browser knows it and our react doesn't so write a code
  let toggleTaskCompleted = (id) => {
    let updatedTasks = tasks.map((item) => {
      if (id === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTask(updatedTasks);
    console.log(updatedTasks);
    //console.log(tasks[0]);
  };

  //  var q = [11, 24, 34, 55, 1, 9, 0];
  //  q.filter((item) => {
  //    if (item >= 18) {
  //      console.log("changed");
  //      return { ...item };
  //    }
  //    console.log("done");
  //    return item;
  //  });

  //consoled values : 
  // done         debugger eval code:7:10
  // changed      debugger eval code:4:11
  // changed      debugger eval code:4:11
  // changed      debugger eval code:4:11
  // done         debugger eval code:7:10
  // done         debugger eval code:7:10
  // done         debugger eval code:7:10

  //editing task
  let editedTask = (id, newName) => {
    let editedTaskList = tasks.map((item) => {
      if (id === item.id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setTask(editedTaskList);
  };

  //delete the task
  let deleteTask = (id) => {
    //console.log(id);
    let remainingTasks = tasks.filter((item) => id !== item.id);
    setTask(remainingTasks);
    console.log(remainingTasks);
  };

  //mapping and neatly packing as obj and passing
  let taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((item) => (
      <Todo
        name={item.name}
        completed={item.completed}
        id={item.id}
        key={item.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editedTask}
      />
    ));

  //make a new object just like we have other ones
  let newTask = (receiveNewTask) => {
    let newTask = {
      id: Math.random().toString(),
      name: receiveNewTask,
      completed: false,
    };
    setTask([newTask, ...tasks]);
    console.log(newTask);
  };

  //count task and fix the values that displays remaining tasks
  let headingText = `${taskList.length} tasks remaining`;
  let fixGrammar = headingText.length !== 1 ? "tasks" : "task";
  let completeText = `${taskList.length} ${fixGrammar} remaining`;

  //pass filter names accordingly
  let filterList = FILTER_NAMES.map((item) => (
    <FilterButton
      key={item}
      taskName={item}
      isPressed={item === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h2 className="Todo-heading">Go, make things DONE</h2>

      <Form onAddTask={newTask} />

      <div className="filters btn-group stack-exception">{filterList}</div>

      <h2 id="list-heading" style={{textAlign : "center"}}>{completeText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList} {/* sending listing the mapped data */}
      </ul>
    </div>
  );
}

export default App;
