import React from 'react';
import Task from '../Task/Task';

const Tasks = ({ tasks, hadleTaskClick, handleTaskDelete }) => {
    return(
        <>
            {tasks.map((task) => (<Task 
            key={task.id}
            task={task} 
            hadleTaskClick={hadleTaskClick} 
            handleTaskDelete={handleTaskDelete} />))}
        </>
    )
}

export default Tasks;