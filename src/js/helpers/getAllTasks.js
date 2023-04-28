import boardsData from '../../../db.js';

export default function getAllTasks() {
    return boardsData.map((board) => board.tasks).flat();
}
