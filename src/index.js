import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDosjh0rHteAkGwRqqZx6kpDAQoUpkiAtY';


//Create a new component
//produce some HTML
class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo: null
        } ;
        //do initial search
        this.videoSearch('surfboard');
    }
    videoSearch(term) {
        YTSearch({key:API_KEY, term: term}, (videos) =>{
            this.setState({
                    videos:videos,
                    selectedVideo:videos[0]
                }
            );
            //this.setState({videos:videos}); if argument and property
            // is the same
        });
    }

    render(){
        //for throttlng search function
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo } />
                <VideoList
                    onVideoSelect = { selectedVideo =>
                        this.setState({selectedVideo})
                    }
                    videos={this.state.videos}/>
            </div>
        );
    }
}





//component's generated html and put in on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
