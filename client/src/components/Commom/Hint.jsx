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
  background-color: var(--textColor);
  color: var(--backgroundColor);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.85em;
  font-weight: 600;
  white-space: nowrap;
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
    right: 99%;
    top: 50%;
    transform: translateY(-50%);
    border: 12px solid transparent;
    border-right-color: var(--textColor);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 6px 10px;
  }
`

const HintWrapper = styled.div`
  position: relative;
  display: inline-block;
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
      top: rect.top + rect.height / 2 - 17,
      left: rect.right + 15
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
