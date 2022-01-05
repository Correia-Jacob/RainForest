import React from 'react';
import './css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/home' style={{ textDecoration: 'none' }}>
                <img
                    className='header__logo'
                    src='https://i.ibb.co/Tv6PfqF/rainforest.png'
                    alt=''
                />
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <Link to='/All' style={{ color: 'black' }}><SearchIcon className='header__searchIcon' /></Link>
            </div>
            <div className='header__nav'>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthenticaton} className='header__option'>
                        <span className='header__optionLineOne'>Hello, {user ? user.email.split('@', 1) : 'Guest'}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders' style={{ textDecoration: 'none' }}>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <div className='header__optionCart'>
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__cartCount'>
                            {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div >
    );
}

export default Header;
