import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <div>
            <Container>
              <Section 
                title="Model S"
                description= "Oder online for touchless Delivery"
                backgroundImg= "model-s.jpg"
                leftBtnText="Customize order"
                rightBtnText = "Existing inventory"
              />
              <Section 
                title="Model Y"
                description= "Oder online for touchless Delivery"
                backgroundImg= "model-y.jpg"
                leftBtnText="Customize order"
                rightBtnText = "Existing inventory"
                />
              <Section
                title="Model 3"
                description= "Oder online for touchless Delivery"
                backgroundImg= "model-3.jpg"
                leftBtnText="Customize order"
                rightBtnText = "Existing inventory"
                />
              <Section
                title="Model X"
                description= "Oder online for touchless Delivery"
                backgroundImg= "model-x.jpg"
                leftBtnText="Customize order"
                rightBtnText = "Existing inventory"
                />
              <Section 
                title="Lowest Cost Solar Panels in America"
                description= "Money-back guarantee"
                backgroundImg= "solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText = "Learn more"
                />
              <Section 
                title="Solar for New Roofs"
                description= "Solar Roof Costs Less Than a New Roof"
                backgroundImg= "solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText = "Learn More"
                />
              <Section 
                title="Accessories"
                description= ""
                backgroundImg= "accessories.jpg"
                leftBtnText="Customize order"  
              />
            </Container>
        </div>
    )
}


export default Home


const Container = styled.div`
    height: 100vh;


`