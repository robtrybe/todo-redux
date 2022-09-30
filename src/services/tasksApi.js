export const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
}

export const saveTask = (task) => {
    const arrayTasks = getTasks();
    arrayTasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(arrayTasks));
}
