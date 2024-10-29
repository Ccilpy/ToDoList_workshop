import { useState } from 'react';
import TaskToDo from '../TaskToDo';

interface TaskListProps {
    name: string;
    newTask: string;
    id: number;
}

export default function TaskList({ name, newTask, id }: TaskListProps) {
    const [taskName, setTaskName] = useState(''); // cela crée un état pour stocker le nom d'une nouvelle tâche
    const [nextId, setNextId] = useState(1); // cela garde une trace de l'identifiant de chaque tâche, la première tâche commence à 1
    const [tasks, setTasks] = useState<{ id: number; name: string }[]>([]); // c'est un tableau contenant des objets, chaque objet représente une tâche
    const [taskCount, setTaskCount] = useState(0); // c'est le compteur du nombre de tâches, cela commence à 0

    const addTask = () => { // fonction qui ajoute de nouvelles tâches et incrémente le compteur de tâches
        setTasks([...tasks, { id: nextId, name: taskName }]); // cela met à jour l'état de tasks en copiant chaque élément dans un nouveau tableau
        setTaskName(''); // réinitialise l'état de taskName
        setTaskCount(taskCount + 1); // met à jour le compteur de tâches
        setNextId(nextId + 1); // incrémente nextId de 1, pour que chaque tâche ait un identifiant unique et croissant

    };

    return (
        <>
            <p> {taskCount} tâches à faire</p> 
            <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} // écoute les changements dans le champ input
                placeholder="Nouvelle tâche"
            />
            <button type="button" onClick={addTask}>Nouvelle tâche</button>
            <ul>
                {tasks.map((task) => ( // parcourt le tableau task et pour chaque tâche crée un li
                    <li key={task.id}>{task.name}</li> 
                ))}
            </ul>
        </>
    );
}
