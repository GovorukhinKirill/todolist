import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";
import "./style.css";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const task1 = {
  Value: "completed",
  Text: "сделать дз",
  Id: 1,
};
const task2 = {
  Value: "active",
  Text: "убраться в команате",
  Id: 2,
};

export default function Todolist() {
  const [allTasks, setAllTasks] = useState([task1, task2]);
  const [Tasks, setTasks] = useState("active");

  const handleChange = (event) => {
    setTasks(event.target.value);
  };

  const changeStatus = (taskId) => {
    const updated = allTasks.map((task) =>
      task.Id === taskId ? { ...task, Value: "completed" } : task
    );
    
    setAllTasks(updated);
  };
  const changeStatusDelete = (taskId) => {
    const updated = allTasks.map((task) =>
      task.Id === taskId ? { ...task, Value: "deleted" } : task
    );

    setAllTasks(updated);
  };
  return (
    <main className="todo-main">
      <div className="todo-container">
        <h1 className="todo-title">📝 Todolist</h1>
        <Button variant="contained">Add</Button>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tasks</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Tasks}
            label="Task Status"
            onChange={handleChange}
          >
            <MenuItem value={"active"}>Актуальные задачи</MenuItem>
            <MenuItem value={"deleted"}>Удаленные задачи</MenuItem>
            <MenuItem value={"completed"}>Выполненные задачи</MenuItem>
          </Select>
        </FormControl>

        <section className="task-list">
          {allTasks.filter(task => task.Value === Tasks).length === 0 ? (
            <p className="empty-text">Нет активных задач.</p>
          ) : (
            allTasks
              .filter((task) => task.Value === Tasks)
              .map((task, index) => (
                <div key={index} className="task-card">
                  <div className="task-content">
                    <Circle className="task-icon" />
                    <span className="task-text">{task.Text}</span>
                  </div>
                  <CheckCircle className="check-icon" />
                  <button onClick={() => changeStatus(task.Id)}>completed</button>
                  <button onClick={() => changeStatusDelete(task.Id)} >deleted</button> 
                </div>
              ))
          )}
        </section>
      </div>
    </main>
  );
}
