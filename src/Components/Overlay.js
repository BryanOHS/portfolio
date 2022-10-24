import React from 'react'
import styled from 'styled-components';

function Overlay(pros) {
    const [opacity, setOpacity] = React.useState(1);

    const headerRef = React.createRef();

    React.useEffect(() => {
        const headerHeight = headerRef.current.clientHeight;
        const range = 200;
        const offset = headerHeight / 2;
    
        const didScrollPage = (e) => {
          let calc = 1 - (window.scrollY - offset + range) / range;
    
          if (calc > 1) {
            calc = 1;
          } else if (calc < 0) {
            calc = 0;
          }
    
          setOpacity(calc);
        };
    
        window.addEventListener("scroll", didScrollPage);
    
        return () => {
          window.removeEventListener("keydown", didScrollPage);
        };
      }, []);

  return (
    <Overlayer  ref={headerRef} style={{opacity: opacity}}>

    </Overlayer>
  )

const Overlayer = styled.div`
    position: absolute;
    top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: aqua;
  opacity: 0;
  z-index: 0;
  
`
}

export default Overlay
