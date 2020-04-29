import React, { Component } from 'react';
import store from './store/index-saga'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(
            store.getState()
        )
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
    render() { 
        return ( 
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                deleteItem={this.deleteItem}
                clickBtn={this.clickBtn}
            ></TodoListUI>
        );
    }
}
 
export default TodoList;