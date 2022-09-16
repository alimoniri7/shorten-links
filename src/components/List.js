import React from 'react';

// Components
import Item from './shared/Item';

// Styles
import styles from './list.module.scss'

const List = ({data}) => {
    return (
        <ul className={styles.listContainer} >
            {data.map(item=> <Item key={item.result.code} originalLink={item.result.original_link} shortenLink={item.result.full_short_link} />)}
        </ul>
    );
};

export default List;