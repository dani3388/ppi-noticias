import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper black darken-3">
            
            <a href="#!" className="brand-logo center"><img src="https://i.ibb.co/C2GQ3Yh/logo2.png"/>{titulo}</a>
        </nav>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;