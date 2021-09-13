import React from 'react';
import { useHistory } from 'react-router';

import './Task.css'
import imgInfoIcon from '../../images/information.png'
import imgCloseIcon from '../../images/close.png'

const Task = ({ task, hadleTaskClick, handleTaskDelete }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div className="task-container" style={task.completed ? { textDecoration: "line-through", background: "#ffcc00" } : {}} >
            <div className="task-title" onClick={() => hadleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="button-container">
                <button className="details-task-button"
                    onClick={handleTaskDetailsClick}>
                    <img src={imgInfoIcon} alt="Information icon"></img>
                </button>
                <button className="remove-task-button"
                    onClick={() => handleTaskDelete(task.id)}>
                    <img src={imgCloseIcon} alt="Information icon"></img>
                </button>
            </div>
        </div>
    );
}

export default Task;