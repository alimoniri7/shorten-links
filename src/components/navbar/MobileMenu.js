import React from 'react';


// Styles
import styled from 'styled-components';
import styles from './mobileMenu.module.scss'

const Menu= styled.ul`
    display: none;
    flex-direction: column;
    width: 100%;
    margin: 1rem auto;
    background-color: hsl(257, 27%, 26%);
    /* padding: 1.3rem 0; */
    height: ${props=> props.isMenuOpen ? '370px' : '0'};
    justify-content: center;
    border-radius: .6rem;
    transition: all .2s linear;
    position: relative;
    overflow: hidden;
    div{
        position: relative;
        width: 90%;
        margin: 0 auto;
        
        &:first-child{
            border-bottom:1px solid #ffffff51;
        }
    }
    button{
        font-size: 1rem;
        color: #fff;
        padding: 1rem 0;
        width: 100%;
        text-align: center;
    }
    @media (max-width : 600px) {
        display: flex;
    }
`

const MobileMenu = ({isMenuOpen}) => {
    return (
        <Menu isMenuOpen={isMenuOpen} >
            <div>
                <li>ّ<button>Features</button></li>
                <li><button>Pricing</button></li>
                <li><button>Resources</button></li>
            </div>
            <div>
                <li><button>Login</button></li>
                <li><button className={styles.blueButton} >Sign Up</button></li>
            </div>
        </Menu>
    );
};

export default MobileMenu;