import React, { Component }from 'react';

import Header from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import Todo from '../todo-list/todo-list';
import './app.css';

export default class App extends Component{
    
    state = {
        data: [
            { label: 'Task 1', important: true, id:1 },
            { label: 'Second', important: false, id: 2 },
            { label: 'tHIRD', important: false, id:3 }
        ]
    }

    deleteItem = (id)=>{
        this.setState(({data})=>{
            const idx = data.findIndex(el => el.id === id);
            const before = data.slice(0, idx);
            const after = data.slice(idx+1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    render(){
        return (
            <div className='todo-app w-300'>
                <Header/>
                <div className='top-panel d-flex'>
                  <SearchPanel/>
                  <ItemStatusFilter/>
                </div>
                <Todo 
                todos={this.state.data} 
                onDeleted={this.deleteItem}
                />
            </div>
        );
    }
}