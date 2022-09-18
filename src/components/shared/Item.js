import React, {useState}  from 'react';

// helper
import { copier } from '../../helper/copier';

// styles
import styles from './item.module.scss'

//
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Item = ({originalLink, shortenLink}) => {
    const [isCopied , setIscopied] = useState(false)

    return (
        <li className={styles.itemContainer} >
            <p>{originalLink}</p>
            <div>
                <a href={shortenLink}>{shortenLink}</a>


                <CopyToClipboard text={shortenLink}>
                    <input type='button' value={isCopied? 'Copied!' : 'Copy' } className={isCopied? styles.btnDark : styles.btn} onClick={(e)=> copier(e, setIscopied)} />
                </CopyToClipboard>
                
            </div>
        </li>
    );
};

export default Item;