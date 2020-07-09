import React from 'react';
import './../../base.css';

const Infos = ({deleteAllTodos, leftTodos}) => {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{leftTodos}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={deleteAllTodos}>Clear completed</button>
        </footer>
    )
}

export default Infos;