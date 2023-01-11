import TodoListItem from './todo-list-item';

const Todo = ({todos})=>{
    const elems = todos.map((el, i) => {
        return (<li key={i}>
            <TodoListItem label={el.label} important={el.important}/>
            </li>)
    });

    return(
        <ul>
            {elems}
        </ul>
    );
}

export default Todo;