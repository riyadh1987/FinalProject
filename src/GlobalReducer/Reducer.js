export const reducerFilm = (state, action) => {
    switch (action.type) {
    // case "GET_MOVIES":
    //     return {...state, dataTable: action.payload};
    case 'FETCH_INIT':
        return { ...state };
    case 'FETCH_SUCCESS':
        return { ...state, dataTable: action.payload };
    case 'FETCH_FAILURE':
        return { ...state };
    default:
        throw new Error();
    }
}