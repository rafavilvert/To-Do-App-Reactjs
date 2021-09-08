import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';

import './App.css';
import TaskDetails from './components/TaskDetails/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data)
    }

    fetchTasks();
  }, [])

  const hadleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(1000),
      completed: false,
    }];
    setTasks(newTasks)
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} hadleTaskClick={hadleTaskClick} handleTaskDelete={handleTaskDelete} />
          </>
        )} />
        <Route path='/:taskTitle' exact component={TaskDetails} />
      </div>
    </Router>
  );
}

export default App;
