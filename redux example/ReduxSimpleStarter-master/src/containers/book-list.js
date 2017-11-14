import React from 'react';
import { connect } from 'react-redux';
import {selectBook} from "../actions/index";
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
    renderList(){
        return this.props.books.map((book) => {
                return (
                    <li key={book.title}
                        onClick= {() => this.props.selectBook(book)}
                        className="list-group-item">
                        {book.title}
                    </li>
                );
            });
    }
    render(){
        return (
          <ul className="list-group col-sm-4">
              {this.renderList()}
          </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}
//anything returned from this function will end up as props
//on the Booklist container
function  mapDispatchToProps(dispatch) {
    //whenever selectBook is called
    //result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote Booklist from a component to a container
//it needs to know about this new dispatch method, selectBook
//make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);