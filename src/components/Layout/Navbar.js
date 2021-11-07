import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import PropTypes from 'prop-types';

 const Navbar = ({ auth: {isAuth, loading}, logout }) => {


    const authLinks = (

      <ul>

      <li>
        <Link to='/profiles'>Developers</Link>
      </li>

      <li>
        <Link to='/posts'>Posts</Link>
      </li>

        <li>
          <Link to='/dashboard'>
            <i className="fas fa-user-alt"></i>{' '}
           <span className="hide-sm">Dashboard</span>
            </Link>
        </li>

          <li>
            <a onClick={ logout } href="#!">
              <i className="fas fa-sign-out-alt"></i>{' '}
              <span className="hide-sm">Logout</span>
              </a>
            </li>
         
        </ul>

    )

    const guestLinks = (

      <ul>
          <li>
            <Link to='/profiles'>Developers</Link>
            </li>

          <li>
              <Link to='/register'>Register</Link>
          </li>

          <li>
              <Link to='/login'>Login</Link>
          </li>
        </ul> 
    )

    return (
      
        <nav className="navbar bg-navbar">
        <h1>
          <Link  to="/">
            
            {/* <i className="fas fa-code"></i> */}
          
          </Link>
        </h1>

        {!loading && (<React.Fragment>{ isAuth ? authLinks : guestLinks }</React.Fragment>)}
        
      </nav>

      
    )
}

Navbar.propTypes = {

  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({

  auth: state.auth
})

export default connect(mapStateToProps, { logout }) (Navbar);
