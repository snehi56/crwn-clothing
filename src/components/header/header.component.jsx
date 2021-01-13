import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/" >
            <logo className='logo' />
        </Link>
        <div className='options'>
            <Link class='option' to='/shop'>SHOP</Link>
            <Link class='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
);

export default Header;