import React from 'react';

// Styles
import styles from './navbar.module.scss'

// Assets
import logo from '../../Assets/svg/logo.svg'
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false)


    return (
        <nav className={styles.container} >
            <div>
                <a href="./" className={styles.logo}><img src={logo} alt="" /></a>
                <ul className={styles.desktopMenu} >
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className={styles.rightContainer} >
                <button>Login</button>
                <button>Sign Up</button>
            </div>
            <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </nav>
    );
};

export default Navbar;