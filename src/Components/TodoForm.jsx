import React from 'react';
import { useTodo } from '../Contexts/Context';
import { useState } from 'react';

function TodoForm() {
    const [todo , setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 
        addTodo({id:Date.now() , todo:todo , complete:false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex items-center gap-2 bg-slate-900/90 border border-white/10 mt-8 rounded-xl p-3 ml-4 mr-4">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-400 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;