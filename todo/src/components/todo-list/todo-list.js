import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const Todo = ({todos})=>{
    const elems = todos.map((el, i) => {
        return (<li key={i} className="list-group-item">
            <TodoListItem label={el.label} important={el.important}/>
            </li>)
    });

    return(
        <ul className="list-group todo-list">
            {elems}
        </ul>
    );
}

export default Todo;