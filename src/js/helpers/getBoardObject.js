import boards from '../../../db.js';

export default function getBoardObject(boardName) {
    const newBoard = {};

    newBoard.boardName = boardName;
    newBoard.id = findLastId() + 1;
    newBoard.tasks = [];

    return newBoard;
}

const findLastId = () => {
    let maxID = 0;

    boards.forEach((board) => {
        if (board.id > maxID) {
            maxID = board.id;
        }
    });

    return maxID;
};
