import React from 'react';
import Styled from 'styled-components';

const  BurgerBox = Styled.button`
    display: none;
    flex-direction: column;
    width : 30px;
    height : 30px;
    align-items : center;
    justify-content : space-around;
    z-index : 10;
    margin: auto , 0;
    div{
        width:100%;
        height : .25rem;
        background-color : hsl(257, 7%, 63%);
        border-radius : 100px;
        transform-origin:1px;
        transition: all .2s linear;
        &:first-child{
            transform:${props => props.isMenuOpen ? "rotate(45deg)" : "rotate(0deg)"};
        }
        &:last-child{
            transform:${props => props.isMenuOpen ? "rotate(-45deg)" : "rotate(0deg)"};
        }
        &:nth-child(2){
            transform: ${props => props.isMenuOpen ? "translateX(-100%)" : "translateX(0)"};
            opacity : ${props => props.isMenuOpen ? "0" : "1"};
        }
    };
    @media (max-width : 600px){
        display : flex;
    };
`


function BurgerMenu({isMenuOpen , setIsMenuOpen}) {


    const openMenu = () =>{
        setIsMenuOpen(prevIsMenuOpen=> !prevIsMenuOpen)
    }


    return (
        <BurgerBox isMenuOpen={isMenuOpen} onClick={openMenu}>
            <div></div>
            <div></div>
            <div></div>
        </BurgerBox>
    );
}

export default BurgerMenu;