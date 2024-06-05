import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
export default function EmptyProjectsView({onStartAddProject}) {
    return (
        <div className="text-center w-2/3 mt-26">
            <img className="mb-6 object-contain size-20 mx-auto" src={noProjectImage} alt="notepad with pen" />
            <h2 className="mb-4 text-2xl text-stone-500 font-semibold">No Project Selected</h2>
            <p className="mb-8 text-base text-stone-400 font-light">Get started with a new one</p>
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </div>

    )
}