//state argument is not application state
//it is only the state this reducer is responsible for

//if state is undefined it will be null
export default function (state=null, action) {
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}