import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import Todo from '../todo-list/todo-list';
import './app.css';

const App = () =>{
    const data = [
        { label: 'Task 1', important: true },
        { label: 'Second', important: false }
    ];

    return (
        <div className='todo-app w-300'>
            <Header/>
            <div className='top-panel d-flex'>
              <SearchPanel/>
              <ItemStatusFilter/>
            </div>
            <Todo todos={data} onDeleted={(id) =>{console.log('del', id)}}/>
        </div>
    );
}

export default App;