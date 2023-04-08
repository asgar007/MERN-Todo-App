import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addNewTodo } from "../redux/actions";


const Todoform = () => {
    const [text, setText] = useState("");
    
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Enter new task.."
              onChange={onInputChange}
              value={text}
            />
        </form>
    )
}

export default Todoform;