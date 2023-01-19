import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{

    constructor(){
        super();

        this.state = {
            done: false,
            important: false
        };
    }

    render(){
        const { label, onToggleImportant, onToggleDone, done, important} = this.props;
        
        let classNames = 'todo-list-item';
        if (done) classNames += ' done';
        if (important) classNames += ' important';

        return (
        <span className={classNames}>
            <span className='todo-list-item-label'
            onClick={this.onLabelClick}>
                {label}
            </span>
            <span className='float-right'>
                <button type='button' 
                className='btn btn-outline-success btn-sm float-right'
                onClick={onToggleImportant}>
                    <i className='fa fa-exclamation'/>
                </button>
                <button type='button' 
                className='btn btn-outline-danger btn-sm float-right'
                onClick={onToggleDone}>
                    U
                </button>
            </span>
        </span>)
    }
}