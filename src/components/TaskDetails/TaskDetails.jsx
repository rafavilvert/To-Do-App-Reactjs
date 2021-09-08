import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../Button/Button';

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                Detalhes da task
            </div>
        </>
     );
}
 
export default TaskDetails;