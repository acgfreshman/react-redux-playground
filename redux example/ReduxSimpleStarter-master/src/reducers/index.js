import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


//this function mapping all reducer to a state which is
//presented as a key such as books, activeBook
const rootReducer = combineReducers({
    books : BooksReducer,
    activeBook: ActiveBook
});



export default rootReducer;
