import boards from '../../../db.js';

export function checkTaskById(id) {
    boards.forEach((board) => {
        board.tasks = board.tasks.map((task) => {
            if (task.id === id) {
                const newTask = task;
                newTask.isCompleted = !newTask.isCompleted;
                return newTask;
            } else {
                return task;
            }
        });
    });
}
