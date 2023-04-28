import getBoardNames from './getBoardNames.js';

export default function getBoardSelectionOptionsMarkup() {
    const names = getBoardNames();
    const markups = [];

    names.forEach((name) => {
        markups.push(`<option value="${name}">${name}</option>`);
    });

    return markups;
}
