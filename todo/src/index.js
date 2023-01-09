import React from 'react';
import ReactDOM from 'react-dom';

const Todo = ()=>{
    const items = ['Item 1', 'Second'];
    return(
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
}

const Header =()=>{
    return(<h1>My Todo List</h1>)
}

const SearchPanel=()=> {
    return <input placeholder='Seacrh...'/>;
}
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
