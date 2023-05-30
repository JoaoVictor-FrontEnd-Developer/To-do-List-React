

export function newItemMessage() {
    return {type: 'newItemMessage'}
}

export function deletedMessage() {
    return {type: 'deletedMessage'}
}

export function updateItemMessage() {
    return {type: 'updateItemMessage'}
}

export function inputError() {
    return {type: 'inputError'}
}

export function clearMessage() {
    return { type: '' };
}