import React from 'react';

// Assets

// Styles
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.container} >
            <div className={styles.leftContainer} >
                <h1>
                    More than just shorter links
                </h1>
                <p>
                    Build your brand's recognition and get detailed insights on how your links are performing
                </p>
            <button className={styles.blueButton} >Get Started</button>
            </div>
            <div className={styles.poster}></div>
        </header>
    );
};

export default Header;