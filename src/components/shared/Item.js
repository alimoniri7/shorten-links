import React from 'react';
import { copier } from '../../helper/copier';

const Item = ({originalLink, shortenLink}) => {
    return (
        <li>
            <p>{originalLink}</p>
            <div>
                <a href={shortenLink}>{shortenLink}</a>
                <input type='button' value='copy' onClick={(e)=> copier(e, shortenLink)} />
            </div>
        </li>
    );
};

export default Item;