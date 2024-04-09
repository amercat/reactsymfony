import React, { createContext } from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {name:'drop something'},
                {name:'drop something'},
                {name:'drop something'},
                {name:'drop something'},
                {name:'drop something'},
                {name:'drop something'},

            ],
        };
    }

    // Create
    createTodo=(todo) => {
        console.log(todo);
        let data= [...this.state.todos];
        data.push({ name: todo.task, description: todo.description });
        this.setState({todos: data});
    }

    // Read
    readTodo() {}

    // Update
    updateTodo() {}

    // Delete
    deleteTodo() {}

    render() {
        return (
            <TodoContext.Provider
                value={{
                    ...this.state,
                    createTodo: this.createTodo.bind(this),
                    updateTodo: this.updateTodo.bind(this),
                    readTodo: this.readTodo.bind(this),
                    deleteTodo: this.deleteTodo.bind(this)
                }}
            >
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider; // Changed export to TodoContextProvider
