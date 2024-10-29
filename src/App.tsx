import './App.css'
import TaskList from './components/TaskList'
import TaskToDo from './components/TaskToDo'

function App() {
  const name = "Ma liste de tâches";
  const newTask = "Nouvelle tâche";
  const id = 1;

  return (
    <>
    <TaskToDo />
    <TaskList name={name} newTask={newTask} id={id}/>
      
       
    </>
  )
}

export default App
