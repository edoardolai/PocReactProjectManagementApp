import { useState } from "react";
import EmptyProjectsView from "./components/EmptyProjectsView";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })
  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }

      const projIdx = prevState.projects.findIndex(p => p.id === newTask.projectId)
      const updatedProjects = [...prevState.projects]
      updatedProjects[projIdx].tasks.push(newTask)
      return {
        ...prevState,
        projects: updatedProjects
      }
    })
  }

  function handleDeleteTask(taskToDelete) {
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.map(project => {
          if (project.id === taskToDelete.projectId) {
            return {
              ...project,
              tasks: project.tasks.filter(task => task.id !== taskToDelete.id)
            };
          }
          return project;
        })
      };
    });
  }


  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(newProject) {
    const project = {
      ...newProject,
      id: Math.random(),
      tasks: []
    }
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, project]
      }
    })
  }

  function handleSelectProject(projectId) {

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  function handleDeleteProject(project) {

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(proj => proj !== project)
      }
    })
  }

  function handleCancelProject() {

    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })

  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject
      onAddProject={handleAddProject}
      onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <EmptyProjectsView onStartAddProject={handleStartAddProject} />
  } else if (projectState.selectedProjectId) {
    const project = projectState.projects.find((proj) => proj.id === projectState.selectedProjectId)
    content = <SelectedProject
      tasks={project.tasks ? project.tasks : []}
      onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask}
      onDelete={handleDeleteProject}
      project={project} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar selectedProjectId={projectState.selectedProjectId} projects={projectState.projects} onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
