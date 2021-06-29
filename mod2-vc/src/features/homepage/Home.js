import React  from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (

        <Container>

            
            <Section 
                title="Welcome to your Virtual Campus" 
                description="One place for all your campus needs" 
                backgroundImg="campus.jpg" 
                leftBtnText="Login" 
                rightBtnText="Signup" 
        
            />

            <Section
                title="About Us" 
                description=" " 
                backgroundImg="about-us2.jpg" 
                
            />
            <Section 
                title="Developers" 
                description="Lets meet the developers." 
                backgroundImg="developers4.jpg" 
                
            />

            <Section 
                title="Contact Us" 
                description="Click on the telephones for contacts." 
                backgroundImg="contact-us.jpg" 
                
            />

        </Container>
    )
}

export default Home

const Container =styled.div `
     

     

`
