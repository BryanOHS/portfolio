import React from 'react'
import styled from 'styled-components'
import SecondSect from '../Components/SecondSect'
import Welcome from '../Components/Welcome'
import Work from '../Components/projects/Work'



class  Home extends React.Component {
  state = {
    opacity: 0
  }

  listenSrollEvent = e => {
    if(window.scrollY < 250){
      this.setState({opacity: 0})
    }
    if(window.scrollY > 300){
      this.setState({opacity: 0.2})
    }
    if(window.scrollY > 350){
      this.setState({opacity: 0.3})
    }
    if(window.scrollY > 400){
      this.setState({opacity: 0.6})
    }
    if(window.scrollY > 450){
      this.setState({opacity: 0.8})
    }
    if(window.scrollY > 500){
      this.setState({opacity: 1})
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.listenSrollEvent)
  }
 

  render(){
    return (
      <>
      <Overlay style={{opacity: this.state.opacity}}/>
      <Welcome/>
      <SecondSect/>
      <Work/>
      </>
    )
    
  }
  
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 380%;
  background-color: #000814;
  z-index: 0;
`
export default Home
