import React from 'react';
import styled, { keyframes } from 'styled-components';

const TextWave = (): JSX.Element => {
  const textAnim = keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-80px);
    }
  `;

  const Span = styled.span<{ '--i': number }>`
    display: inline-block;
    text-shadow: 10px 10px 15px #000000;
    animation: ${textAnim} 2s ease-in-out infinite alternate;
    animation-delay: ${(props) => `calc(0.4s * ${props['--i']})`};
  `;

  return (
    <div className="text">
      <Span {...{'--i': 1}}>D</Span>
      <Span {...{'--i': 1}}>E</Span>
      <Span {...{'--i': 1}}>V</Span>
      <Span {...{'--i': 1}}>E</Span>
      <Span {...{'--i': 1}}>L</Span>
      <Span {...{'--i': 1}}>O</Span>
      <Span {...{'--i': 1}}>P</Span>
      <Span {...{'--i': 1}}>E</Span>
      <Span {...{'--i': 1}}>R</Span>
      <Span {...{'--i': 1}}>-</Span>
      <Span {...{'--i': 1}}>H</Span>
      <Span {...{'--i': 1}}>U</Span>
      <Span {...{'--i': 1}}>B</Span>

    </div>
  );
};

export default TextWave;
