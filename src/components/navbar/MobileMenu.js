import React from 'react';


// Styles
import styled from 'styled-components';
import styles from './mobileMenu.module.scss'

const Menu= styled.ul`
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin: 0rem auto;
    background-color: hsl(257, 27%, 26%);
    /* padding: 1.3rem 0; */
    height: ${props=> props.isMenuOpen ? '410px' : '0'};
    border-radius: .6rem;
    transition: all .2s linear;
    position: relative;
    overflow: hidden;
    *{
        font-weight: 600;
    }
    div{
        position: relative;
        width: 90%;
        margin: 0 auto;
        
        &:first-child{
            border-bottom:1px solid #ffffff51;
            li{
                &:first-child{
                    button{
                        padding-top: 0;
                    }
                }
            }
        }
    }
    button{
        font-size: 1rem;
        color: #fff;
        padding: 1.1rem 0;
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