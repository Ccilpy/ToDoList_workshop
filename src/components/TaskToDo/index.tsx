import { useState } from 'react'

export default function TaskToDo () {
const [taskCount, setTaskCount] = useState(0);
const taskCountClick = () => setTaskCount (taskCount + 1);


return (
    <>
    <button type="button" onClick={taskCountClick}> nouvelle tâche </button>
    <p> {taskCount} tâches à faire</p>
    </>
)


}