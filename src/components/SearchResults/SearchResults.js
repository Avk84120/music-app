import React from "react";
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList Track={this.props.SearchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default SearchResults;
