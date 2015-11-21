import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore }from 'redux';
import {Provider} from 'react-redux';


const initialState = {
    todos: [
        {id: 1, text: "Learn React.js"},
        {id: 2, text: "Build an Application"},
        {id: 3, text: "Go Home"},
        {id: 4, text: "Rinse and Repeat"}
    ]
};

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            const newTodos = state.todos.filter(t => t !== action.todo);
            return {todos: newTodos};
        case 'ADD_TODO':
            const lastId = Math.max.apply(Math, state.todos.map(t => t.id));
            return {todos: state.todos.concat([{id: lastId + 1, text: action.text}])};
        default:
            return state;
    }
};

const store = createStore(todoApp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));