export const personsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return [...action.payload]; // چون state ما ارایه هست پس داخل ارایه میزاریم
        case 'DELETE_PERSON' :
            return [...action.payload];
        case 'UPDATE_PERSON':
            return [...action.payload];
        default:
            return state;
    }
}