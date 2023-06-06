import Item from '../Components/Item'

export function addItem(text) {
    let item = Item(text)
    return {type: 'ADD_ITEM', payload: item}
}

export function removeItem(id) {
    return {type: 'REMOVE_ITEM', payload: id}
}

export function doneItem(id) {
    return {type: 'DONE_ITEM', payload: id}
}

export function updateItem(id, text) {
    return {type: 'UPDATE_ITEM', payload: id, text: text}
}

export function changeAnimation(id) {
    return {type: 'CHANGE_ANIMATION', payload: id}
}