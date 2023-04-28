import boards from '../../../db.js';

export function deleteTaskById(id) {
    boards.forEach((board) => {
        board.tasks = board.tasks.filter((task) => task.id !== id);
    });
}
