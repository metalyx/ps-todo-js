import boards from '../../../db.js';
import { render } from '../../../index.js';

export let dragged = null;
export const changeDragged = (newVal) => {
    dragged = newVal;
};

export default function addDragHandling(item) {
    item.addEventListener('dragstart', onDragStart);
    item.addEventListener('dragend', onDragEnd);
    item.addEventListener('drop', onDrop);
    item.addEventListener('dragover', onDragOver);
    item.addEventListener('dragleave', onDragLeave);
}

function onDragStart(e) {
    e.currentTarget.style.opacity = '0.5';
    dragged = e.currentTarget;
}
function onDragEnd(e) {
    e.currentTarget.style = '';
    dragged = null;
}
function onDrop(e) {
    e.stopPropagation();

    let taskIndex = -1;
    let boardIndex = -1;

    let indexDroppedOn = -1;
    let droppedOnBoardIndex = -1;

    boards.forEach((board, boardInd) => {
        board.tasks.forEach((task, index) => {
            if (
                task.id ===
                parseInt(e.currentTarget.id.slice(6, e.currentTarget.id.length))
            ) {
                indexDroppedOn = index;
                droppedOnBoardIndex = boardInd;
            }

            if (task.id === parseInt(dragged.id.slice(6, dragged.id.length))) {
                taskIndex = index;
                boardIndex = boardInd;
            }
        });
    });

    if (indexDroppedOn > -1 && droppedOnBoardIndex > -1) {
        const draggable = boards[boardIndex].tasks[taskIndex];

        const insertion = {
            id: draggable.id,
            text: draggable.text,
            isCompleted: draggable.isCompleted,
        };

        boards[boardIndex].tasks.splice(taskIndex, 1);

        boards[droppedOnBoardIndex].tasks.splice(indexDroppedOn, 0, insertion);
    }

    dragged = null;
    render();
}
function onDragLeave(e) {
    if (
        e.currentTarget !== dragged &&
        e.currentTarget.className === 'todo-item'
    ) {
        e.currentTarget.style = '';
    }
}
function onDragOver(e) {
    if (
        e.currentTarget !== dragged &&
        e.currentTarget.className === 'todo-item'
    ) {
        e.preventDefault();
        e.currentTarget.style.boxShadow = '1px 5px 5px rgba(0,0,0,0.75)';
    }
}
