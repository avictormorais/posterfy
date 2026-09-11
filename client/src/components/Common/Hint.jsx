import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5px);
  }
`

const HintContainer = styled.div`
  display: none;
`

const HintText = styled.div`
  position: fixed;
  transform: translateY(-50%);
  background-color: var(--textColor);
  color: var(--backgroundColor);
  padding: 6px 9px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: normal;
  font-weight: 600;
  white-space: normal;
  width: max-content;
  max-width: min(240px, calc(100vw - 32px));
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${props => props.isVisible && `
    opacity: 1;
  `}

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: var(--textColor);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const HintWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

  &:hover ${HintText} {
    opacity: 0.9;
  }
`

export default function Hint({ text, children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      top: rect.top + rect.height / 2,
      left: rect.right + 10
    })
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <HintWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HintText isVisible={isVisible} style={{ top: position.top, left: position.left }}>{text}</HintText>
      {children}
    </HintWrapper>
  )
}
