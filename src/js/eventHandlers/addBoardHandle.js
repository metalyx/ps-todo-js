import getBoardObject from '../helpers/getBoardObject.js';
import boards from '../../../db.js';
import { SELECTED_BOARD, changeSelectedBoard } from '../../../index.js';

export default function addBoardHandle() {
    const input = document.getElementById('newBoardInput');

    if (input.value && input.value.trim() !== '') {
        const newBoard = getBoardObject(input.value.trim());
        boards.push(newBoard);
        input.value = '';

        if (SELECTED_BOARD === '-') {
            changeSelectedBoard(boards[0].boardName);
        }

        return true;
    } else {
        return false;
    }
}
