import { checkTaskById } from '../helpers/checkTaskById.js';

export default function checkHandler(e) {
    const id = parseInt(e.currentTarget.id.slice(6, e.currentTarget.id.length));
    checkTaskById(id);
}
