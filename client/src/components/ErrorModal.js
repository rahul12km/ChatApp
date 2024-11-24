import React from 'react'
import styled, { keyframes } from "styled-components";

const ErrorModal = ({text}) => {
  return (
    <Container>
       <div className='body-cont'>
       <p className='msg'>Username or Password is wrong</p>
       </div>
    </Container>
      
    
  )
}

const popUp = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;



const Container = styled.div`
 width: 100%;
 /* height: 100vh; */
 position: fixed;
 /* z-index:10; */
 .body-cont{
    top:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 340px;
    height:100px;
    background-color:#131324;
    position:relative;
    margin:auto;
    border-radius: 10px;
    z-index:20;
    padding-left: 10px;
    padding-right: 10px;
    animation: ${popUp} 0.3s ease-out;
 }

 .msg{
   color:red;
   font-size:20px;
   font-weight: 700;
 }

`;

export default ErrorModal
