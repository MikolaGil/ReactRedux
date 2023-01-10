import TodoListItem from './todo-list-item';

const Todo = ()=>{
    const items = ['Item 1', 'Second'];
    return(
        <ul>
            <li><TodoListItem label="Item 1"/></li>
            <li><TodoListItem label="Second" important /></li>
        </ul>
    );
}

export default Todo;