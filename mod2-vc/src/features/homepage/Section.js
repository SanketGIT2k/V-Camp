import React , {useState} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

import Card from '../Card'


import SignupDialogue from "../loginSignup/SignupDialogue"

import LoginDialogue from "../loginSignup/LoginDialogue"
import Popover from "../SharedComponents/Popover"

function Section({title , description, backgroundImg, leftBtnText, rightBtnText, cards }) {
 
    return ( 
        <Wrap bgImg={backgroundImg} >
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>  

            </Fade>

            {
                title==="Contact Us" && 
                <ContactUsPopover>
                    <Popover mobile="8058240215" linkedIn="asfff" mail="sanket.sharma.2000@gmail.com" />
                    <Popover mobile="8058240215" linkedIn="asfff" mail="sanket.sharma.2000@gmail.com" />
                    <Popover mobile="8058240215" linkedIn="asfff" mail="sanket.sharma.2000@gmail.com" />
                </ContactUsPopover>
            }

            {
                        title==="About Us" && 
                        <AboutDes>
                            <p>
                            Not only are pineapples rich in nutrients, they are also loaded with healthy antioxidants.

Antioxidants are molecules that help your body combat oxidative stress.

Oxidative stress is a state in which there are too many free radicals in the body. These free radicals interact with the body’s cells and cause damage that is linked to chronic inflammation, a weakened immune system and many harmful diseases (5Trusted Source, 6Trusted Source).

Pineapples are especially rich in antioxidants known as flavonoids and phenolic acids (7Trusted Source).

What’s more, many of the antioxidants in pineapple are bound. This allows the antioxidants to survive harsher conditions in the body and produce longer lasting effects (8Trusted Source, 9Trusted Source).

SUMMARY
                            </p>
                        </AboutDes>
                    }

            <Buttons>

                <Fade bottom>

                <ButtonGroup>
                    {leftBtnText &&
                        
                        <LoginDialogue />
                    }

                    { rightBtnText && 
                        <SignupDialogue />
                    } 

                    { title==="Developers" &&

                    <CardView id="dev">
                        <Card 
                        userName="Sanket Sharma"
                        userDescription="DEVELUUUPERRR"
                         />
                        <Card 
                        userName="Harsh Gauttam"
                        userDescription="Gendu"

                        />
                        <Card 
                            userName="Madhav Yadav"
                            userDescription="lendi"
                        />

                    </CardView> 
                    }

                </ButtonGroup>

                </Fade>

                <DownArrow src="../images/down-arrow.svg" />

            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size:cover ;

    scroll-snap-align: start;

    background-repeat: no-repeat;
    background-image:  ${props => `url("../images/${props.bgImg}")`} ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    
`

const ItemText = styled.div `
    padding-top:15vh;
    text-align: center;  
    
`

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom:  30px;

    @media (max-width: 768px) {
        flex-direction:column;
    }

`

const LeftButton = styled.div `

    background-color: rgba(23,26,32,0.8); 
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-teansform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton) `

    background-color: white;
    opacity:  0.65;
    color: black;
    
`
const DownArrow =styled.img `
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

    @keyframes animateDown {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(5px);
  }

  60% {
    transform: translateY(3px);
  }
}

`
const Buttons =styled.div `
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const CardView = styled.div `
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;


`

const AboutDes = styled.div `

    width: 40vw;
    height: 50vh;   
    margin-left: 50vw;
    
    p{
        font-weight: 100    ;
        font-size: 20px;
    }
`

const ContactUsPopover = styled.div `
    display: flex;
    flex-direction: row;

    

`

