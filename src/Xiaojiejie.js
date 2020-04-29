import React, { Component, Fragment, } from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem';
import axios from 'axios';
import Boss from './Boss'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
class Xiaojiejie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        };
        this.inputChange = this.inputChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    // componentWillMount() {
    //     console.log('------- componentWillMount -------')
    // }
    componentDidMount() {
        console.log('------ componentDidMount -------')
    }
    shouldComponentUpdate() {
        console.log('------ shouldComponentUpdate -------')
        return true
    }
    componentDidUpdate() {
        console.log('------- componentDidUpdate ---------')
    }
    componentWillUnmount() {
        console.log()
    }


    // 增加列表
    handleAdd() {
        if (!this.state.inputValue) return 
        
        this.setState({ 
            list: [ ...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    inputChange(e) {
        this.setState({
            inputValue: this.input.value
        })
    }
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    componentDidMount() {
        axios.get('https://easy-mock.com/mock/5ea80718b3e240329310cc8c/nba/xiaojiejie').then(data => {
            
        }).catch((error) => {
            console.log('axios 获取数据失败' + error)
        })
    }
    render() {
        console.log('----- render -----')
        return (
            <Fragment>
                <div>
                    <label htmlFor="input">增加服务：</label>
                    <input
                        id="input"
                        className="input"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        ref={(input) => { this.input = input }}
                        />
                    <button onClick={this.handleAdd.bind(this)}>增加服务</button>
                </div>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={500}
                                        classNames="boss-text"
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <XiaojiejieItem
                                            key={item + index}
                                            content={item}
                                            deleteItem={this.deleteItem}
                                            index={index} 
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }
}

export default Xiaojiejie