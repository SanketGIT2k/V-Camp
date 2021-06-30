import React , {useState} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

import Card from '../Card'


import SignupDialogue from "../loginSignup/SignupDialogue"

import LoginDialogue from "../loginSignup/LoginDialogue"
import Popover from "../SharedComponents/Popover"

import Sanket from "../../imagesSrc/Sanket.png"
import Harsh from "../../imagesSrc/Harsh.png"
import Madhav from "../../imagesSrc/Madhav2.png"

function Section({title , description, backgroundImg, leftBtnText, rightBtnText, cards }) {
 
    return ( 
        <Wrap bgImg={backgroundImg} >
            <Fade bottom>
            <ItemText>
            { title==="Welcome to your Virtual Campus" && <div id="homeLink"></div>}
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>  

            </Fade>
            

            {
                title==="Contact Us" && 


                <ContactUsPopover id="contactLink">
                    <div className="pop1" >
                        <Popover name="Harsh Gauttam" mobile="8227050810" linkedIn="https://www.linkedin.com/in/harsh-gauttam-5898b8199/" mail="harshgauttamofficial@gmail.com" />
                    </div>
                    
                    <div className="pop1">
                        <Popover name="Sanket Sharma" mobile="8058240215" linkedIn="https://www.linkedin.com/in/sanket-sharma-250647198/" mail="sanket.sharma.2000@gmail.com" />
                    </div>

                    <div className="pop1">
                        <Popover name="Madhav Yadav" mobile="9928390365" linkedIn="https://www.linkedin.com/in/madhav-yadav-3300331a2/" mail="madhavyadav@jklu.edu.in" />
                    </div>
                    
                </ContactUsPopover>
            }

            {
                        title==="About Us" && 
                        <AboutDes id="aboutLink">
                            <p>
                                Our goal is to provide our users with all the functionalities that a user would require 
                                in a campus. This means making text communications, video communication, file sharing, mentor
                                mentee meetings platform and many more features. We crave for prviding quality user experience with
                                a feature rich application.
                            </p>
                        </AboutDes>
                    }

            <Buttons>

                <Fade bottom>

                <ButtonGroup >
                    {leftBtnText &&
                        
                        <LoginDialogue />
                    }

                    { rightBtnText && 
                        <SignupDialogue />
                    } 

                    { title==="Developers" &&

                    <CardView id="developerLink">
                        <Card 
                        userName="Sanket Sharma"
                        
                        userImage={Sanket}
                         />
                        <Card 
                        userName="Harsh Gauttam"
                        
                        userImage={Harsh}
                        />
                        <Card 
                            userName="Madhav Yadav"
                            
                            userImage={Madhav}
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
        margin-top: 100px;
        font-weight: 100    ;
        font-size: 20px;
    }
`

const ContactUsPopover = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        margin: 20px;
    }

`

