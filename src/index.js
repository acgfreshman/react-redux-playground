import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDosjh0rHteAkGwRqqZx6kpDAQoUpkiAtY';


//Create a new component
//produce some HTML
const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    );
}





//component's generated html and put in on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
