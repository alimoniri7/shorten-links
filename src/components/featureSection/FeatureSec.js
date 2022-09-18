import React from 'react';

// Components
import Title from './Title';
import FeatureBoxes from './FeatureBoxes';

// Styles
import styles from './featureSec.module.scss'

const FeatureSec = () => {
    return (
        <section  className={styles.container} >
            <Title/>
            <FeatureBoxes/>
        </section>
    );
};

export default FeatureSec;