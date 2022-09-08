import React from 'react';

// assets
import loading from '../../Assets/gif/giphy.gif'

// styles
import styles from './loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.container} >
            <img src={loading} alt="loading" /> please wait ...
        </div>
    );
};

export default Loading;