import boards from '../../../db.js';
import { render } from '../../../index.js';
import { dragged, changeDragged } from './addDragHandling.js';

export default function handleDropBoard(board) {
    board.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    board.addEventListener('drop', (e) => {
        e.stopPropagation();

        let taskIndex = -1;
        let boardIndex = -1;

        boards.forEach((board, boardInd) => {
            board.tasks.forEach((task, index) => {
                if (
                    task.id === parseInt(dragged.id.slice(6, dragged.id.length))
                ) {
                    taskIndex = index;
                    boardIndex = boardInd;
                }
            });
        });

        if (taskIndex > -1 && boardIndex > -1) {
            const targetBoard = boards.find(
                (b) => b.id === parseInt(board.id.slice(5, board.id.length))
            );

            const temp = boards[boardIndex].tasks[taskIndex];
            boards[boardIndex].tasks.splice(taskIndex, 1);
            targetBoard.tasks.unshift(temp);
        }

        changeDragged(null);
        render();
    });
}
