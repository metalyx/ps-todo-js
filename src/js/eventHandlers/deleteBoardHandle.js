import boards from '../../../db.js';
import { SELECTED_BOARD, changeSelectedBoard } from '../../../index.js';

export default function deleteBoardHandle(e) {
    const boardId = parseInt(
        e.currentTarget.id.slice(11, e.currentTarget.id.length)
    );

    let indexToDelete = -1;

    boards.forEach((board, index) => {
        if (board.id === boardId) {
            indexToDelete = index;
        }
    });

    if (indexToDelete > -1) {
        const deleted = boards.splice(indexToDelete, 1);
        if (deleted[0].boardName === SELECTED_BOARD) {
            changeSelectedBoard(boards[0]?.boardName ?? '-');
        }

        return true;
    } else {
        return false;
    }
}
