
function messageReducer(state = {}, action) {
    switch (action.type) {
        case 'newItemMessage':
            return { text: 'Tarefa Adicionada', custom: 'add'};
        case 'deletedMessage':
            return { text: 'Tarefa Removida', custom: 'remove' };
        case 'updateItemMessage':
            return { text: 'Tarefa Atualizada', custom: 'add' };
        case 'inputError':
            return { text: 'Preencha o campo corretamente', custom: 'remove' }
        case '':
            return { text: '', custom: ''}
        default:
            return state;
    }
}

export default messageReducer;