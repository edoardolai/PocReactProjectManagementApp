import { useState } from "react"

export default function NewTask({onAdd}){

    const [enteredTask,setEnteredTask] = useState('')

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }

    return <div className="flex items-center gap-4">
        <input value={enteredTask} onChange={handleChange} className="outline-none  w-64 py-1 px-2 rounded-sm bg-stone-200" type="text" />
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
}