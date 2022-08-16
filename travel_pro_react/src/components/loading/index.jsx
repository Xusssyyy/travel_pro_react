import React from 'react';
import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const Load = styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px dotted black;
        animation: ${animate} 5s linear infinite;
    }
    >span:nth-child(1) {
        border-radius: 90% 10% 90% 10% / 90% 10% 90% 10%;
    }
    >span:nth-child(2) {
        animation-direction:reverse;
        border-radius: 10% 90% 10% 90% / 10% 90% 10% 90%;
    }
    >span:nth-child(3) {
        animation-duration: 3s;
        border-radius: 90% 10% 90% 10% / 90% 10% 90% 10%  ;
    }
    h2{
        font-family:'Times New Roman', Times, serif;
        font-size: 1px;
        color: rgb(200, 180, 235);
    }
`
function Loading() {
    return (
      <Load>
        <span></span>
        <span></span>
        <span></span>
        <h2>Loading...</h2>
      </Load>
    );
  }
   
export default React.memo(Loading);