import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    if (this.props.isFetching) {
      return(
        <h1>Retrieving Character Data...</h1>
      );
    }
    return (
      <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
});

export default connect(
  mapStateToProps,
  { 
    getCharacters 
  } 
)(CharacterListView);
