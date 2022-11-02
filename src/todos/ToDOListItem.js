

const ToDoListItem = ({todo})=>
(<div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
        <button className="compeleted-button">Mark as compeleted</button>
        <button className="remove-button">Remove</button>
    </div>
</div>);


export default ToDoListItem;