import { SELECTED_BOARD } from '../../../index.js';
import getBoardSelectionOptionsMarkup from './getBoardSelectionOptionsMarkup.js';

export default function updateBoardSelection() {
    const boardSelection = document.getElementById('boardSelection');

    boardSelection.innerHTML = getBoardSelectionOptionsMarkup();
    boardSelection.value = SELECTED_BOARD;
}
