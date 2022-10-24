import React from 'react'
import styled, { withTheme } from 'styled-components'
import img1 from '../Assets/Images/1.png'
import img2 from '../Assets/Images/2.png'
import img3 from '../Assets/Images/3.png'
import CountUp from 'react-countup'
import {data} from '../data'
import { get_data_len } from '../Helper'


function Welcome() {

    const num = get_data_len(data)


  return (
    <>
     <Container>
        <div style={{ position: "absolute", display: "flex", flexDirection: "column", textAlign: "center", bottom: "10px", left: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" ,alignItems: "center", fontSize: "20px", color: "white", fontWeight: "200"}}>
                <h2 style={{marginRight: "5px"}}>Project Count:</h2>
                <CountUp className='Yeah' end={num}/>

            </div>
            <img id="img1" src={img1} alt='img'/>
        </div>
        
        <img id="img2" src={img2} alt='img'/>
        <div style={{position: "absolute", bottom: "10px", right: "10px", display: "flex",}}>
            <h2 style={{transform: "rotate(30deg)", color: "white"}}>No risk, no story.</h2>
            <img id="img3" src={img3} alt='img'/>
        </div>

        <TextContainer>
            <h1 id ="front">FrontEnd & Backend <br/> Developer</h1>

            <Button href='#Me'>About Me
            <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg></Button>
       

        </TextContainer>

       
     </Container>
    
    </>

  )
}

const Container = styled.div`
    width: 100%;
    height: 850px;


    img{
        width: 300px;
        height: auto;
        border-radius: 5px;
    }
  
    #img2{
        position: absolute;
        right: 40px;
        top: 30px;
        z-index: -1;
    }
    #img3{
        width: 500px;
    }

    h2{
        font-family: 'Shadows Into Light', cursive;

    }

 `
const TextContainer = styled.div`
    text-align: center;

    h1{
        font-family: 'Helvetiva', sans-serif;
        color: white;
        font-size: 27px;
    }
    #front{
        text-transform: uppercase;
        font-size: 100px;
    }
    h2{
        font-family: 'Helvetiva', sans-serif;
        color: white;
        font-size: 27px;
    }

`

const Button = styled.a`
    color: white;
    text-decoration: none;
    font-size: 50px;
    font-family: 'Shadows Into Light', cursive;


    svg {
            width: auto;
            height: 80px;
            transform: translate(-100%, 20px) translateZ(0);
            fill: none;
            stroke: var(--stroke, var(--line));
            stroke-linecap: round;
            stroke-width: 2px;
            stroke-dasharray: var(--offset, 69px) 278px;
            stroke-dashoffset: 361px;
            transition: stroke .25s ease var(--stroke-delay, 0s), stroke-dasharray .35s;
        }
        &:hover {
            --spacing: 4px;
            --stroke: var(--line-active);
            --stroke-delay: .1s;
            --offset: 180px;
        }

`
export default Welcome
