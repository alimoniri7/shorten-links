import React from 'react';

// Styles
import styled from 'styled-components';
import styles from './featureBox.module.scss'

const Box= styled.div`
    width: 31.5%;
    padding: 2rem;
    position: relative;
    background-color: #fff;
    align-self: ${props => props.position};
    border-radius: 5px;
    z-index: 1;

    @media (max-width: 1200px) {
        padding: 1.7rem 1rem;
        width: 32%;
    }
    @media (max-width:600px) {
        align-self: flex-start;
        width: 100%;
        padding: 2rem;
    }
`

const FeatureBox = ({image, title, description, position}) => {
    return (
        <Box position={position} >
            <div className={styles.icon} ><img src={image} alt="img" /></div>
            <h3 className={styles.title} >{title}</h3>
            <p className={styles.description} >{description}</p>
        </Box>
    );
};

export default FeatureBox;