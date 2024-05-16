import { useState } from "react";
import TaskList from "./components/taskList/taskList";
import AddTask from "./components/addTask/addTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Control de tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
