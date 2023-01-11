import './todo-list-item.css';

const TodoListItem = ({label, important=false})=>{

    return (<div className="todo-list-item">
        {label}
        <span className='float-right'>
        <button type='button' className='btn btn-outline-success btn-sm'>
            <i className='fa fa-exclamation'/>
        </button>
        <button type='button' className='btn btn-outline-danger btn-sm'>
            <i className='fa-trash-can'/>
        </button>
        </span>
        </div>)
}

export default TodoListItem;