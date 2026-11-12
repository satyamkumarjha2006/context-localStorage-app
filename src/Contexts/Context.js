import { createContext, useContext } from "react";

export const ContextTodo = createContext({
    todos:[
        {
            id:1,
            todo:"some Message",
            Complete:false
        }
    ],
    addTodo:(todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleTodo:(id) => {},
})

export const ContextTodoProvider = ContextTodo.Provider

export const useTodo = () => {
    return useContext(ContextTodo)
}