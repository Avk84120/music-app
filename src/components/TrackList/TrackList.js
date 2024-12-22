import React from "react";
import './TrackList.css';
// Rename the imported TrackList to avoid a naming conflict
// import TrackListComponent from "../TrackList/TrackList";
import Track from "../Track/Track"; // Import the `Track` component if it's being used here

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={this.props.onAdd}
                        isRemoval={this.props.isRemoval}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </div>
        );
    }
}

export default TrackList;
