import { saveTask, getTasks } from '../../services/tasksApi';

export const actionRequestTask = () => ({
    type:'REQUEST_TASK',
})

export const actionRequestTaskSucess = (tasksList) => ({
    type:'REQUEST_SUCCESS',
    tasks: tasksList
})

export const thunkTask = (task) => {
    return async (dispatch) => {
        dispatch(actionRequestTask());
        saveTask(task);
        const tasksList = getTasks();
        dispatch(actionRequestTaskSucess(tasksList));
    }
}