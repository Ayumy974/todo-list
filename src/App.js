import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Infos from './components/Informations/Infos';
import './base.css';

const App = () => {

  const [todos, setNewTodo] = useState([]);
  let [leftTodos, setLeftTodos] = useState(0);
  // Pour le tri par catégorie:
  // const [select, setSelect] = useState('all');

  // const defaultSelect = () => {
  //   setSelect('completed');
  //   console.log('todos completed');
  // }
  //  Suppression d'un item:
  const handleDelete = id => {
    const newTodo = [...todos];
    const index = newTodo.findIndex(item => item.id === id)
    newTodo.splice(index, 1);
    setNewTodo(newTodo)      
  }
  
  // Ajout d'un item:
  const handleAdd = item => {
    const newTodos = [...todos];
    newTodos.unshift(item);
    setNewTodo(newTodos);
  }
  // Checkbox d'une todo :
  const handleCheckbox = id => {
    const newTodo = [...todos];
    const index = newTodo.findIndex(item => item.id === id);
    newTodo[index].done = !newTodo[index].done;
    setNewTodo(newTodo);
    // méthode reduce pour le calcul des items qui restent à faire?
  }

  // Checkbox de toutes les todos:
  const handleAllTodos = () => {
    console.log('ok')
    const newTodo = [...todos];
    newTodo.map(item => {
      return item.done = !item.done;
    })
    setNewTodo(newTodo);
  }

  // Editer une todo existante:
  const handleEdit = (id, event) => {
    const newTodo = [...todos];
    const index = newTodo.findIndex(item => item.id === id);
    if (event.key === "Enter") {
      newTodo[index].title = event.currentTarget.value;
      setNewTodo(newTodo);
    }
  }

  // Supprimer toutes les todos finies:
  const deleteAllTodos = () => {
    let newTodo = [...todos];
    const results = newTodo.filter(item => {
      return item.done === false;
    })
    setNewTodo(results);
    console.log(results);
  }

  console.log(todos);

  return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>   
        </header>     
        <TodoList handleAdd={handleAdd} handleDelete={handleDelete} handleCheckbox={handleCheckbox} todos={todos} handleEdit={handleEdit} handleAllTodos={handleAllTodos} />
      <Infos leftTodos={leftTodos} deleteAllTodos={deleteAllTodos} todos={todos} />
      </section>
  );
}

export default App;
