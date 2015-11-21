import React from 'react';
import Header from './header';
import TodoList from './todo_list';
import {connect} from 'react-redux';
import actions from './actions';

class App extends React.Component {
    constructor() {
        super();
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleDeleteTodo(todo) {
        this.props.dispatch(actions.deleteTodo(todo));
    }

    render() {
        return <div>
            <Header onAddTodo={() => this.props.dispatch(actions.addTodo())} />
            <TodoList todos={this.props.todos} onDeleteTodo={this.handleDeleteTodo}/>
        </div>;
    }
}

export default connect(x => x)(App);