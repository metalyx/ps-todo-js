import boardsData from '../../../db.js';

export default function getBoardNames() {
    return boardsData.map((board) => board.boardName);
}
