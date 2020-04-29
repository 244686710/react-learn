import { CHANGE_INPUT, ADD_ITEM, DELETE_TIME, GET_LIST } from './actionTypes'

const defaultState = {
    inputValue: 'Write Someting',
    list: []
}

export default (state = defaultState, action) => {
    console.log('action', action);
    // reducer 里只能接收state，不能改变state
    let newState = {}
    switch (action.type) {
        case CHANGE_INPUT:
            newState = Object.assign({}, state)
            newState.inputValue = action.value
            return newState
        case ADD_ITEM:
            debugger
            newState = Object.assign({}, state)
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case DELETE_TIME:
            newState = Object.assign({}, state)
            newState.list.splice(action.index, 1)
            return newState
        case GET_LIST:
            newState.list = action.data
            return newState
        default:
            return state
    }
}