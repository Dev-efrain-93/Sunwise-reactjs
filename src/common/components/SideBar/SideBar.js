import React, { Component} from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../../actions/userActions';

class Sidebar extends Component{

  constructor(){
    super();
  }

  componentDidMount(){
    
  }

  render() {
    let userInfo = this.props.userInfo ? this.props.userInfo : null;

    return (
      <div className="sidebar">
        {!userInfo && (
          <div className="sidebar__profile">
            <Avatar />
            <p>Bob Smith</p>
          </div>
        )}

        {userInfo && userInfo.logeado && (  
          <div className="sidebar__profile">
            <div className="discover-item__art"
              style={{ backgroundImage: `url(${userInfo.user.images[0].url})`, width: '69px', height: '69px', border: 'solid rgb(196 195 206)', borderRadius: '50%' }}
              /> 
            <p>{userInfo.user.display_name}</p>
          </div>      
        )}
        
        <div className="sidebar__options">
          {this.renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: true })}
          {this.renderSideBarOption('/search', faSearch, 'Search')}
          {this.renderSideBarOption('/favourites', faHeart, 'Favourites')}
          {this.renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
          {this.renderSideBarOption('/charts', faStream, 'Charts')}
        </div>
      </div>
    );
  }

  renderSideBarOption(link, icon, text, { selected } = {}) {
    return (
      <div
        className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
      >
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </div>
    )
  }
}

//recuperar estado
const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer,
  }
}

//conectamos el objeto del almacen redux a atributos del componente sin ninguna accion a enviar
export default connect(mapStateToProps, null)(Sidebar);
