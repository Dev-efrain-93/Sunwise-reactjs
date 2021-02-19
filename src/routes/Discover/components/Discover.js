import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { connect } from 'react-redux';
import { fetchReleases } from '../../../actions/releaseActions';

class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount(){
    this.props.fetchReleases()
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={this.props.releaseReducer.newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    releaseReducer: state.releaseReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReleases: () => dispatch(fetchReleases())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Discover);