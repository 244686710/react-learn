import { CHANGE_INPUT, ADD_ITEM, DELETE_TIME, GET_LIST } from './actionTypes';
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_TIME,
    index
})

export const getListAciton = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://rap2.taobao.org:38080/app/mock/252753/getlist').then(res => {
            console.log(res.data)
            const action = getListAciton(res.data.list)
            dispatch(action)
        }).catch(error => {
            console.log(error)
        })
    }
}