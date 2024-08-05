/* eslint-disable react/prop-types */
import styles from './Task.module.css';
import { TiDelete } from "react-icons/ti";

const Task = ({action, deleteTask}) => {
    const handleDeleteTask = () => {
        deleteTask(action.id);
    }

    return <div className={styles['task-container']}> 
        <p>
            {action.value}
        </p>
        <TiDelete 
            className={styles['delete']} 
            onClick={handleDeleteTask}
        />
    </div>
}

export default Task;