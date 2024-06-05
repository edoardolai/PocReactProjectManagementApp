import Tasks from "./Tasks"
export default function SelectedProject({ project, tasks, onDelete, onAddTask, onDeleteTask }) {

    const {date, title, description} = project
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <>
            <div className="flex flex-col w-[35rem] mt-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex gap-2 items-center justify-between">
                        <h1 className="text-3xl font-semibold text-stone-600 mb-2">{title}</h1>
                        <button onClick={() => onDelete(project)} className="text-stone-600 hover:text-stone-950">Delete</button>
                    </div>
                    <p className="text-stone-400 mb-4">{description}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{formattedDate} </p>
                </header>
            <Tasks selectedProjectId={project.id} tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
            </div>
        </>
    )

}