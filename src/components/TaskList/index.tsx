import { useState } from 'react';

interface TaskListProps {
    name: string;
    newTask: string;
    id: number;
}

export default function TaskList({ name, newTask, id }: TaskListProps) {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState<{ id: number; name: string }[]>([]);
    let nextId = 1;

    const addTask = () => {
        setTasks([...tasks, { id: nextId++, name: taskName }]);
        setTaskName(''); 
    };

    return (
        <>
            <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Nouvelle tâche"
            />
            <button type="button" onClick={addTask}>Nouvelle tâche</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </>
    );
}
