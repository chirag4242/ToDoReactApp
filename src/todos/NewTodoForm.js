
import { useState } from "react";
const NewTodoForm = () =>
{
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="new-todo-form">
            <input type="text" value={inputValue} placeholder="enter text" onChange={(e) =>
            {
                setInputValue(e.target.value);
            }} />
            <button className="new-todo-button">Create todo</button>
        </div>);
}
export default NewTodoForm;