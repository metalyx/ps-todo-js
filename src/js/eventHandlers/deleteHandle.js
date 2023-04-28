import { deleteTaskById } from '../helpers/deleteTaskById.js';

export default function deleteHandler(e) {
    e.stopPropagation();
    const id = parseInt(e.target.id.slice(10, e.target.id.length));

    deleteTaskById(id);
}
