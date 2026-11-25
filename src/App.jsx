import React, { useEffect, useState } from 'react';
import { ContextTodoProvider } from './Contexts/Context';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import { Analytics } from "@vercel/analytics/react"

function App() {
    const [todos , setTodos] = useState([]) 

    const addTodo = (todo) => {
        setTodos((prev) => [{...todo},...prev])
    }

    const updateTodo = (id , todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , complete:!prevTodo.complete} : prevTodo))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length > 0){
            setTodos(todos)
        }

    },[])

    useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos))
    },[todos])
    

    return ( 
        <ContextTodoProvider value={{addTodo , updateTodo , deleteTodo , toggleTodo}}>
        <div className="bg-slate-950 min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-transparent bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
                <Analytics/>
            </div>
            </ContextTodoProvider>
     );
}

export default App;
