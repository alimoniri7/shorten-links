import React from 'react';

// Styles
import styles from './title.module.scss'

const Title = () => {
    return (
        <div className={styles.headerContainer} >
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advance statistics dashboard.</p>
        </div>
    );
};

export default Title;