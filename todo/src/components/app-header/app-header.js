import { Component } from 'react';
import './app-header.css';

export default class Header extends Component {

    render(){
       return(
        <div className='app-header d-flex'>
            <h1>Todo List</h1>
            <h2>1 more to do, 1 done</h2>
        </div>
       )
    }
}