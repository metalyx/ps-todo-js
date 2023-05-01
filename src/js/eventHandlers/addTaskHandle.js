import boards from '../../../db.js';
import { SELECTED_BOARD } from '../../../index.js';
import getTaskObject from '../helpers/getTaskObject.js';

export default function addTaskHandle() {
    const input = document.getElementById('newTaskInput');

    if (input.value && input.value.trim() !== '' && SELECTED_BOARD !== '-') {
        const newTask = getTaskObject(input.value.trim());

        boards.forEach((board) => {
            if (board.boardName === SELECTED_BOARD) {
                board.tasks.push(newTask);
            }
        });

        input.value = '';
        return true;
    } else {
        return false;
    }
}
