export default {
    addTodo: () => {
        const text = prompt("Enter the task: ");
        return {type: 'ADD_TODO', text: text};
    },
    deleteTodo: (todo) => {
        return {type: 'DELETE_TODO', todo: todo};
    }
}
;