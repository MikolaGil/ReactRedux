import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/app-header';
import SearchPanel from './components/search-panel';
import Todo from './components/todo-list';

const App = () =>{
    const data = [
        { label: 'Task 1', important: true },
        { label: 'Second', important: false }
    ];

    return (
        <div>
            <Header/>
            <SearchPanel/>
            <Todo todos={data}/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
