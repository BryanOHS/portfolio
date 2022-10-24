import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
   <>
   <Nav>
        <Logo>
            <h1 id='Name'>ArtiSenpai</h1>
            <h1 id="Another">FrontEnd Developer</h1>
        </Logo>
        <NavbarLinks>
            <NavbarLink href='#Work'>Work,<svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
            </NavbarLink>
            <NavbarLink href='#Me'>About Me, <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg></NavbarLink>
            <NavbarLink href=''>Contact <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg></NavbarLink>
        </NavbarLinks>
   </Nav>
   </>
  )
}

const Nav = styled.nav`
    width: 90%;
    height: 70px;
    margin: 10px auto;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left:40px;
    padding-right: 40px;
  
`
const Logo = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    align-items: center;

    color: white;
    #Name{
        font-family: 'Shadows Into Light', cursive;
        letter-spacing: 2px;
        font-weight: 200;
    }
    #Another{
        font-family: 'Bebas Neue', cursive;
        font-weight: 200;
        font-style: normal;
        
        &::after , &::before {
            content: "-";
        }
       
    }

`
const NavbarLinks = styled.li`
    list-style: none;
    width: 200px;
    display: flex;
    justify-content: space-around;

`
const NavbarLink = styled.a`
    font-size: 20px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    margin: 0 var(--spacing, 0px);
    transition: margin .25s;
    color: white;
    z-index: 2;
    
    font-family: 'Shadows Into Light', cursive;
    svg {
            width: 76px;
            height: 30px;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 0px) translateZ(0);
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



export default Navbar
