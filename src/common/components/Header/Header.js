import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Hero } from '../../../assets/images/hero.svg';
import './_header.scss';
import { connect } from 'react-redux';
import { onToggleTheme } from '../../../actions/appActions';

class Header extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {

  }

  

  render() {
    return (
      <div className="header">
        <Hero />
        <div>
          <h1>Your favourite tunes</h1>
          <h2>Switch Mode <FontAwesomeIcon icon={faMoon} onClick={() => this.props.themeToggler(this.props.theme)}/></h2>
        </div>
      </div>
    );
  }

}

//recuperar estado
const mapStateToProps = (state) => {
  return {
    theme: state.appReducer.theme
  }
}

//enviar acciones
const mapDispatchToProps = (dispatch) => {
  return {
    themeToggler: (theme) => dispatch(onToggleTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
