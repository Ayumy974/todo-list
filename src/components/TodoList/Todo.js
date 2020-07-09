import React, {useState} from 'react';

const Todo = ({ details, handleDelete, handleCheckbox, handleEdit, displayItem }) => {

    const [editing, setEditing] = useState(false);
    let edition = [];
    if (details.done) {
        edition.push('completed');
    }
    if (editing) {
        edition.push('editing');
    }
    
    return (
        <li className={edition.join(" ")}>
            <div className="view">
                <input onChange={()=>handleCheckbox(details.id)} className="toggle" type="checkbox" checked={details.done ? "checked": ""} />
                <label onDoubleClick={()=>setEditing(!editing)}>{details.title}</label>
                <button onClick={()=>handleDelete(details.id)} className="destroy"></button>
            </div>
            <input className="edit" defaultValue={details.title} onKeyPress={(e)=>handleEdit(details.id, e)} />
        </li>    
    )
}

export default Todo;