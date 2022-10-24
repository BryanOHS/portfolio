import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
    <Container>
        <span>ArtiSenpai</span>
    </Container>
    </>
  )
}

const Container = styled.div`
width: 100%;
color: white;
font-size: 20px;
height: 40px;
font-family: 'Mjölnir', sans-serif;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;

span{
    margin: 0 10px;
}
`
export default Footer
