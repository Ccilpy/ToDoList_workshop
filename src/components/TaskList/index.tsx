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
    const [checkedTasks, setCheckedTasks] = useState<boolean[]>([]);
     

    const addTask = () => { // fonction qui ajoute de nouvelles tâches et incrémente le compteur de tâches
        const newTaskObj = { id: nextId, name: taskName }; //  objet qui représente une nouvelle tâche à ajouter à la liste des tâches
        setTasks([...tasks, newTaskObj]);  // cela met à jour l'état de tasks et de newTaskObj en copiant chaque élément dans un nouveau tableau
        setCheckedTasks([...checkedTasks, false]); // Ajoute un élément 'false' pour la nouvelle tâche
        setTaskName(''); // réinitialise l'état de taskName
        setTaskCount(taskCount + 1); // met à jour le compteur de tâches
        setNextId(nextId + 1); // incrémente nextId de 1, pour que chaque tâche ait un identifiant unique et croissant

    };

    const handleCheckboxChange = (index: number) => {
        const newCheckedTasks = [...checkedTasks]; // Crée une copie du tableau checkedTasks
        newCheckedTasks[index] = !newCheckedTasks[index]; // Inverse la valeur de la case à cocher
        setCheckedTasks(newCheckedTasks); // Met à jour l'état avec le nouveau tableau
    };

    return (
        <>
            <p> {taskCount} tâches à faire</p> 
            <p> tâches effectuées</p>
            <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} // écoute les changements dans le champ input
                placeholder="Nouvelle tâche"
            />
            <button type="button" onClick={addTask}>Nouvelle tâche</button>
            <ul>
                {tasks.map((task, index) => ( // parcourt le tableau de tâches
                    <li key={task.id}>
                        {task.name} 
                        <input
                            type="checkbox"
                            checked={checkedTasks[index] || false} // la valeur par défaut est false
                            onChange={() => handleCheckboxChange(index)} // écoute le changement de la checkbox
                        />
                    </li> 
                ))} 
            </ul>
        </>
    );
}
