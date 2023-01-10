import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/app-header';
import SearchPanel from './components/search-panel';
import Todo from './components/todo-list';

const App = ()=>{
    
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <Todo/>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));
