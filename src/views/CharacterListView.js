import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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
  fetching: state.charsReducer.isFetching
});

export default connect(
  mapStateToProps,
  { 
    getCharacters 
  } 
)(CharacterListView);
