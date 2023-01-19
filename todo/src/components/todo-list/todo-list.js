import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const Todo = ({todos, onDeleted, onToggleDone, onToggleImportant})=>{
    const elems = todos.map(el=> {
        return (
        <li key={el.id} className="list-group-item">
            <TodoListItem label={el.label} important={el.important}
            onDeleted={() => onDeleted(el.id)}
            onToggleDone={()=>onToggleDone(el.id)}
            onToggleImportant={()=>onToggleImportant(el.id)}
            />
        </li>)
    });

    return(
        <ul className="list-group todo-list">
            {elems}
        </ul>
    );
}

export default Todo;