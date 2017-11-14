export function selectBook(book) {
    //selectBook is an ActionCreator needs to return an action
    //an action is an object with a type property
    return {
        type:'BOOK_SELECTED', //type is always upper case
        payload:book
    };
}