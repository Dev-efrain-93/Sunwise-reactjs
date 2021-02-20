import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { connect } from 'react-redux';
import { fetchReleases, fetchFeaturedPlaylists, fetchCategories } from '../../../actions/trackActions';

class Discover extends Component {
  constructor() {
    super();

  }

  componentDidMount(){
    this.props.fetchReleases();
    this.props.fetchFeaturedPlaylists();
    this.props.fetchCategories();
  }

  render() {    

    const newReleases = this.props.newReleases ? this.props.newReleases : [];
    const playlists = this.props.featuredPlaylists ? this.props.featuredPlaylists : [];
    const categories = this.props.categories ?  this.props.categories : [];

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newReleases: state.releaseReducer.newReleases,
    featuredPlaylists: state.featuredPlaylistsReducer.featuredPlaylists,
    categories: state.categoriesReducer.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReleases: () => dispatch(fetchReleases()),
    fetchFeaturedPlaylists: () => dispatch(fetchFeaturedPlaylists()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);