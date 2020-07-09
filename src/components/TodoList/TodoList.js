import React, {useState} from 'react';
import Todo from './Todo';
import shortid from "shortid"

const TodoList = ({ todos, handleAdd, handleDelete, handleCheckbox, handleEdit, handleAllTodos}) => {
    let [item, setNewItem] = useState({
        id: "",
        title: "",
        done: false
    });

    const handleChange = event => {
        setNewItem({
            id: shortid.generate(),
            title: event.currentTarget.value,
            done: false
        });
    }

    const keyPressed = event => {
        if (event.key === "Enter") {
            handleAdd(item);
            setNewItem({title: "", done: false});
        }
    }

    let categories = [];
    const newTodos = todos;
    switch (newTodos) {
        case 'all':
            categories = newTodos;
            break
        case 'completed':
            categories = newTodos.filter(todo => todo.done === true);
            break
        case 'active':
            categories = newTodos.filter(todo => todo.done === false);
            break
        default:
            categories = 'all';
    }
    console.log(categories)

    return (
        <section className="main">
            <input onKeyPress={keyPressed} className="new-todo" type="text" placeholder="Ajouter un item" value={item.title}  onChange={handleChange}></input> 
            <input id="toggle-all" className="toggle-all" type="checkbox"  />
            <label onClick={handleAllTodos}>Mark all as complete</label>
            <ul className="todo-list">
                {
                    newTodos.map(item => <Todo {...item} key={shortid.generate()} details={item} handleDelete={handleDelete} handleCheckbox={handleCheckbox} handleEdit={handleEdit}  />)
                }
            </ul>
        </section>
    )
}

export default TodoList;
