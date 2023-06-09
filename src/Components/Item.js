import {v4 as uuidv4} from 'uuid'

function Item(text) {

    return {
        id: uuidv4(),
        text: text,
        done: false,
        animation: true,
    }
    
}

export default Item;