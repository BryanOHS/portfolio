import React from 'react'
import styled from 'styled-components'
import {data} from '../../data'
import gif from '../../Assets/Gif/1.gif'


function Work() {
  return (
    <>
    <Container id="Work">
        <h1>Select Your Character</h1>
        <WorkBox>
        {data.map((project) => {
          
          return(
            <Project key={project.project_id}>
              <Img id="image">
                <img src={project.big_image}></img>
              </Img>
               <div id="name" style={{maxWidth: "300px", textAlign: "start"}}>
                  <h1>{project.project_name}</h1>
                  {project.techniques_used.map((data) =>{
                    return(
                      <Tech>{data}</Tech>
                    )
                  })}
               </div>


    
              <Gif id="gif" src={gif} alt="klol"></Gif>
            </Project>
            
          )
        })}
  
       
            
        </WorkBox>

    </Container>
    </>
  )
}
const Container = styled.div`
    margin-top: 200px;
    position: relative;
    z-index: 2;
    color: white;


`
const Img = styled.div`
  width: 400px;
  height: auto;

  img{
    width: 100%;
    height: 100%;
  }
`
const Tech = styled.span`
  color: white;
  font-size: 20px;
  margin-right: 5px;
  font-family: 'Shadows Into Light', cursive;
`
const Project = styled.div`
  width: auto;
  height: 400px;
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  h1{
    font-family: 'Bebas Neue', cursive;
    max-width: 500px;
    color: white;
    font-size: 40px;
    font-weight: 300;
  }

  #name:hover ~ #gif,  #image:hover ~ #gif  {
    opacity: 1;
  }
`
const Gif = styled.img`
  width: 300px;
  height: auto;
  position: absolute;
  right: 400px;
  opacity: 0;
  transition: 0.5s ease-in-out;

`
const WorkBox = styled.div`
  border-top: 2px solid white;

`
export default Work
