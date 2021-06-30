import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom"

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    // const cars = useSelector (selectCars)
    // console.log(cars);

    return (

        <BrowserRouter>

        <Container>
            <a href="#homeLink">
                <img src="../images/logo.png" />
            </a>

            <Menu> 
                {/* { cars && cars.map((car, index) =>(
                    <a key={index} href="#">{car}</a> 
                ))} */}
                
                <a  href="#aboutLink">AboutUs</a> 
                <a  href="#developerLink">Developers</a> 
                <a  href="#contactLink">ContactUs</a> 
                
            </Menu>

            <RightMenu>
                <a href="#">Your Account</a>

                <CustomMenu onClick ={ () => setBurgerStatus(true)}/>

            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>

                    <CustomClose onClick= {()=> setBurgerStatus(false)} />

                </CloseWrapper>

                {/* { cars && cars.map((car, index) =>(
                    <li><a key={index} href="#">{car}</a></li> 
                ))} */}
                
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>

            </BurgerNav>

        </Container>

        </BrowserRouter>
    )
}

export default Header

const Container = styled.div `
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    a{
        font-weight:bold;
    }

    a:hover{
        font-size:20px;
        transition:0.25s;
    }

    img{
        width:90px;
        height: 50px;
    }

`

const Menu = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left:100px;
    padding-right:10px;


    a {
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        font-weight:bold;
    }

    @media (max-width: 768px){
        display:none;
    }

`

const RightMenu = styled.div `

    display: flex;
    align-items: center;


    a {
        text-transform: uppercase;
        margin-right:10px;
    }
    
` 

const CustomMenu = styled(MenuIcon) `

    cursor: pointer;

`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }
    }

`

const CustomClose = styled(CloseIcon) `
    cursor: pointer;

`

const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
      

`