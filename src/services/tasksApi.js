export const getTasks = () => {
    return Promise.resolve(JSON.parse(localStorage.getItem('tasks')) || []);
}

export const saveTask = async (task) => {
    const arrayTasks = await getTasks();
    arrayTasks.push({ name: task, finish: false })
    localStorage.setItem('tasks',JSON.stringify(arrayTasks));
}

export const updateTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
