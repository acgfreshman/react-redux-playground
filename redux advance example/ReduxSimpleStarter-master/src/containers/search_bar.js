import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            term:''
        };
        //we must overwrite the callback function otherwise
        //the reference with "THIS" will be undefined
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term:event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();

        //fetchWeather function now is a state so we call it
        this.props.fetchWeather(this.state.term);
        this.setState(
            {
                term:''
            }
        );
    }


    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forcast city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }


}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);