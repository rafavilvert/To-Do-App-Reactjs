import React from 'react';
import { useHistory } from 'react-router';

import './Task.css'

const Task = ({ task, hadleTaskClick, handleTaskDelete }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div className="task-container" style={task.completed ? { textDecoration: "line-through", background: "#f0ad4e" } : {}} >
            <div className="task-title" onClick={() => hadleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="button-container">
                <button className="details-task-button"
                    onClick={handleTaskDetailsClick}>
                    I
                </button>
                <button className="remove-task-button"
                    onClick={() => handleTaskDelete(task.id)}>
                    X
                </button>
            </div>
        </div>
    );
}

export default Task;