import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function updateSelectedCategory(categoryToBeSelected) {
    setSelectedCategory(categoryToBeSelected);
  }

  function onDeleteTask(textToDelete) {
  const filteredTasks =  tasks.filter((task) => task.text !== textToDelete)
  setTasks(filteredTasks);
  }
  const visibleTasks =  tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateSelectedCategory={updateSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")}/>
      <TaskList tasks={visibleTasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
