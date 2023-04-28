import boardsData from './db.js';
import { getBoardsMarkup } from './src/js/templating/templateFunctions.js';
import setEventListeners from './src/js/helpers/setEventListeners.js';
import getBoardNames from './src/js/helpers/getBoardNames.js';
import updateBoardSelection from './src/js/helpers/updateBoardSelection.js';

export let SELECTED_BOARD = getBoardNames()[0] || '-';
export const changeSelectedBoard = (newValue) => {
    SELECTED_BOARD = newValue;

    const select = document.getElementById('boardSelection');
    select.value = newValue;
};

const boardsContainer = document.querySelector('.boardsContainer');

export const render = () => {
    boardsContainer.innerHTML = getBoardsMarkup(boardsData);
    updateBoardSelection();
    setEventListeners();
};

render();
