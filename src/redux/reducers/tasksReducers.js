const INITIAL_STATE = {
    tasks:[],
    loading: false,
}

const tasksReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'REQUEST_TASK':
            return {
                ...state,
                loading:true
            }
        case 'REQUEST_SUCCESS':
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            }
        default:
            return state;
    }
}

export default tasksReducer;
