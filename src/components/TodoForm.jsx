import { useState } from "react"
import { useTodo } from "../contexts"

function TodoForm() {
    // create state for a single todo
    const [todo, setTodo] = useState("")

    // bring aaddTodo function from Context
    const { addTodo } = useTodo()

    // this function will trigger after we add it by submitting the form
    const add = (e) => {
        e.preventDefault()

        if (!todo) return
        //todo has three keys i.e id, todo and completed. 
        //id is added by default in addTodo() in App.jsx 
        //so we are sending rest of the elements through here
        addTodo({ todo: todo, completed: false })
        // above line can also be written as addTodo({todo, completed:false})

        //clean up
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //wiring input with state
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

