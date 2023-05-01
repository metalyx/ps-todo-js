import getAllTasks from './getAllTasks.js';

export default function getTaskObject(taskText) {
    const id = getLastTaskId() + 1;
    const isCompleted = false;
    const text = taskText;

    return {
        id,
        isCompleted,
        text,
    };
}

function getLastTaskId() {
    if (Math.max(...getAllTasks().map((t) => t.id)) === -Infinity) {
        return 0;
    }
    return Math.max(...getAllTasks().map((t) => t.id));
}
