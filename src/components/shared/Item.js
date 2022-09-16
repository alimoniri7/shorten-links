import React from 'react';

// helper
import { copier } from '../../helper/copier';

// styles
import styles from './item.module.scss'

const Item = ({originalLink, shortenLink}) => {
    return (
        <li className={styles.itemContainer} >
            <p>{originalLink}</p>
            <div>
                <a href={shortenLink}>{shortenLink}</a>
                <input type='button' value='copy' onClick={(e)=> copier(e, shortenLink)} />
            </div>
        </li>
    );
};

export default Item;