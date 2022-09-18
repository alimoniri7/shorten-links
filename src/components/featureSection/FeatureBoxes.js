import React from 'react';

// Assets
import brandIcon from '../../Assets/svg/icon-brand-recognition.svg'
import detialedIcon from '../../Assets/svg/icon-detailed-records.svg'
import customizableIcon from '../../Assets/svg/icon-fully-customizable.svg'
import FeatureBox from './FeatureBox';

// Styles
import styles from './featureBoxes.module.scss'

const FeatureBoxes = () => {
    const features=[
        {
            id: 1,
            image: brandIcon,
            title : 'Brand Recognition',
            description: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instill confidence in your content.',
            position : 'flex-start'
        },{
            id: 2,
            image: detialedIcon,
            title: 'Detailed Records',
            description: 'Gain insights into who is clicking your links. Knowing when and where people engage with youre content helps inform better decisions.',
            position : 'center'
        },{
            id: 3,
            image: customizableIcon,
            title: 'Fully Customizable',
            description: 'Improve brand awareness and contents discoverability throgh customizable links. Supercharging audience engagement.',
            position : 'flex-end'
        }
    ]


    return (
        <div className={styles.boxesContainer} >
            {features.map(feature=> <FeatureBox key={feature.id} image={feature.image} title={feature.title} description={feature.description} position={feature.position} />)}
        </div>
    );
};

export default FeatureBoxes;