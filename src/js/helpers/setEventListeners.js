import { changeSelectedBoard, render } from '../../../index.js';
import deleteHandler from '../eventHandlers/deleteHandle.js';
import checkHandler from '../eventHandlers/checkHandler.js';
import addBoardHandle from '../eventHandlers/addBoardHandle.js';
import addTaskHandle from '../eventHandlers/addTaskHandle.js';
import addDragHandling from '../eventHandlers/addDragHandling.js';
import handleDropBoard from '../eventHandlers/handleDropBoard.js';
import deleteBoardHandle from '../eventHandlers/deleteBoardHandle.js';

let isButtonAddNewBoardListenerExist = false;
let isButtonAddNewTaskListenerExist = false;
let isBoardSelectionListenerExist = false;
let arrayOfItemsIdWithListeners = [];

export default function setEventListeners() {
    if (!window) {
        throw new Error();
    }

    const deleteButtons = document.querySelectorAll('.todo-item-delete-button');

    // Delete Tasks
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            deleteHandler(e);
            render();
        });
    });

    const deleteBoardButtons = document.querySelectorAll(
        '.board-delete-button'
    );
    // Delete Board
    deleteBoardButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (deleteBoardHandle(e)) {
                render();
            }
        });
    });

    const tasks = document.querySelectorAll('.todo-item');

    // Check tasks
    tasks.forEach((li) => {
        li.addEventListener('click', (e) => {
            e.preventDefault();
            checkHandler(e);
            render();
        });
    });

    // Change target board

    const boardSelection = document.getElementById('boardSelection');

    if (!isBoardSelectionListenerExist) {
        isBoardSelectionListenerExist = true;
        boardSelection.addEventListener('change', (e) => {
            changeSelectedBoard(e.target.value);
        });
    }

    // Adding board
    const buttonAddNewBoard = document.getElementById('buttonAddNewBoard');

    if (!isButtonAddNewBoardListenerExist) {
        isButtonAddNewBoardListenerExist = true;

        buttonAddNewBoard.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (addBoardHandle()) {
                render();
            }
        });
    }

    // Adding task
    const buttonAddNewTask = document.getElementById('buttonAddNewTask');

    if (!isButtonAddNewTaskListenerExist) {
        isButtonAddNewTaskListenerExist = true;
        buttonAddNewTask.addEventListener('click', (e) => {
            e.stopPropagation();

            if (addTaskHandle()) {
                render();
            }
        });
    }

    // Handling drag for tasks
    const todoItems = document.querySelectorAll('.todo-item');

    todoItems.forEach((item) => {
        addDragHandling(item);
    });

    // Handling drop on boards

    const boards = document.querySelectorAll('ul');
    boards.forEach((board) => {
        handleDropBoard(board);
    });
}
