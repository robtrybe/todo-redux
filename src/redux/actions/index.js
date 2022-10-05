import { saveTask, getTasks, updateTasks } from '../../services/tasksApi';

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
        await saveTask(task);
        const tasksList = await getTasks();
        dispatch(actionRequestTaskSucess(tasksList));
    }
}

export const getTasksThunks = () => {
    return async (dispatch) => {
        dispatch(actionRequestTask());
        const tasksList = await getTasks();
        dispatch(actionRequestTaskSucess(tasksList));
    }
}

export const finishTaskThunk = (event) => {
    const { target } = event;
    const { dataset: { index }  } = target;

    const isFinish = target.className.includes('finish');
    if(isFinish) {
        target.classList.remove('finish');
    }else{
        target.classList.add('finish');
    }

    return async (dispatch, getState) => {
        dispatch(actionRequestTask());
        const tasks = getState().tasks;
        tasks[index].finish = !isFinish;
        dispatch(actionRequestTaskSucess(tasks));
        updateTasks(tasks);
    }
}