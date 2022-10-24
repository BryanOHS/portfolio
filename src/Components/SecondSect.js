import React from 'react'
import styled from 'styled-components'
import img from "../Assets/Images/5.png"
import img2 from "../Assets/Images/6.png"

function SecondSect() {
  return (
    <Container id="Me">
      <img id="vinci" src={img} alt="html"/>
      <Info>
        <h1>Hello Dear</h1>
        <h6>My Name is Arti</h6>
        <p>Dolore aute consequat eu officia reprehenderit irure. Adipisicing sint laboris deserunt veniam nulla nostrud quis esse ex. Dolore sit fugiat velit cillum sint eu dolore aliquip id. Tempor labore laborum veniam ipsum.Dolore aute consequat eu officia reprehenderit irure. Adipisicing sint laboris deserunt veniam nulla nostrud quis esse ex. Dolore sit fugiat velit cillum sint eu dolore aliquip id. Tempor labore laborum veniam ipsum.</p>
      </Info>
      <img id="statue" src={img2} alt="html2"/>
      <Me>
      
      <svg width="162" stroke="white" height="119" viewBox="0 0 162 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
      <span>Me</span>        
      </Me>
      <Me2>
      <span>Also Me</span> 
      <svg width="162" stroke="white" height="119" viewBox="0 0 162 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
             
      </Me2>

   

    </Container>
  )
}
const Container = styled.div`
    margin-top: 100px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #vinci{
      width: 500px;
      margin-left: 30px;
      height: auto;
      border-radius: 5px ;
    }
    #statue{
      position: absolute;
      right: 30px;
      bottom: 10px;
      width: 300px;
      height: 400px;
    }
    
    
`
const Me = styled.div`
    color: white;
    position: absolute;
    bottom: 100px;
    left: 500px;
    transform: rotate(-30deg);
    span{
    font-size: 20px;
    font-family: 'Julius Sans One', sans-serif;
    bottom: 10px;
    left: 700px;
  }

  svg{
    width: 100px;
    height: auto;
   
    transform: scaleX(-1);
 

  }

`
const Me2 = styled.div`
    color: white;
    position: absolute;
    bottom: 100px;
    right: 400px;
    span{
    font-size: 20px;
    font-family: 'Julius Sans One', sans-serif;
    bottom: 10px;
    left: 700px;
  }

  svg{
    position: absolute;
    width: 100px;
    height: auto;
    transform: rotate(50deg);


  }

`

const Info = styled.div`
  position: absolute;
  top: 100px;
  left: 800px;
  margin: 20px;
  text-align: center;
  width: 400px;
  display: flex;
  flex-direction: column;

  
  

  h1{
      font-family: 'Bebas Neue', cursive;
      color: white;
      font-size: 50px;
      font-weight: 300;

  }
  h6{
      font-family: 'Shadows Into Light', cursive;
      color: white;
      font-size: 20px;
      margin-bottom: 10px;
      margin-top: -20px;

      font-weight: 300;

  }
  p{
        color: white;
        font-family: 'Shadows Into Light', cursive;
        font-size: 20px;
    }

`
export default SecondSect
