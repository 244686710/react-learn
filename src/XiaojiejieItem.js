import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}为您服务{this.props.content}
            </li> 
        );
    }

    // 组件优化
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
        // this.props.list = [] 单项数据流，只读属性，不可以修改

    }
}

XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps = {
    avname: '啵啵啵菜'
}
export default XiaojiejieItem;