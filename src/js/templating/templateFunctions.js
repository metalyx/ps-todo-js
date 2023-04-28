const getBoard = ({ id, boardName, tasks }) => {
    return `
        <ul id="board${id}">
        <div class="flex">
            <p class="boardName">${boardName}</p>
            <button id="deleteBoard${id}" type="button" class="board-delete-button">✖</button>
        </div>
            ${getTasksMarkup(tasks)}
        </ul>
    `;
};

const getTask = ({ id, text, isCompleted }) => {
    return `
        <li class="todo-item" id="liItem${id}" draggable="true">
            <div class="flex">
                <input type="checkbox" id="todoItem${id}" ${
        isCompleted ? 'checked' : ''
    }>
                <label for="todoItem${id}">${text}</label>
            </div>
            <button id="deleteTodo${id}" type="button" class="todo-item-delete-button">✖</button>
        </li>
    `;
};

const getTasksMarkup = (tasks) => tasks.map((task) => getTask(task)).join('');

export const getBoardsMarkup = (boards) => {
    return boards.map((board) => getBoard(board)).join('');
};
