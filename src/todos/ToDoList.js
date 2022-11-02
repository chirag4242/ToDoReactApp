import ToDoListItem from './ToDOListItem'
import NewTodoForm from "./NewTodoForm"
const ToDoList = ({ todos = [{ text: 'NEw' }] }) => (<div className="list-wrapper">
    <NewTodoForm />
    {
        todos.map((todo, i) =>
            <ToDoListItem key={i} todo={todo}></ToDoListItem>)
    }</div>);

export default ToDoList;