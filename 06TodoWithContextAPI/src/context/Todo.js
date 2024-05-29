import { createContext, useContext } from "react";

const todoContext = createContext(
    {
        Todo: [
            {
                id: 1,
                title: "title",
                completed: false
            }
        ],
        addTodo: (todo) => { },
        deleteTodo: (id) => { },
        updateTodo: (id, todo) => { }
    }
);

const TodoProvider = todoContext.Provider;
const todoConsumer = () => {
    return useContext(todoContext);
}

export { TodoProvider, todoConsumer };