import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  position: ${({ $position }) => $position};

  &:before {
    background: var(--background-main-color);
    opacity: 0.6;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }
`

const LoaderContent = styled.div`
  color: var(--text-primary-color);
  border-radius: 12px;
  display: block;
  position: absolute;
  overflow: hidden;

  svg {
    animation: ${spinning} 1.4s infinite ease-in-out both;
  }
`

function Spinner() {
  return (
    <LoaderContent>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        color="var(--text-primary-color)"
      >
        <path d="M12 2L12 6"></path>
        <path d="M12 18L12 22"></path>
        <path d="M4.93 4.93L7.76 7.76"></path>
        <path d="M16.24 16.24L19.07 19.07"></path>
        <path d="M2 12L6 12"></path>
        <path d="M18 12L22 12"></path>
        <path d="M4.93 19.07L7.76 16.24"></path>
        <path d="M16.24 7.76L19.07 4.93"></path>
      </svg>
    </LoaderContent>
  )
}

const defaultProps = {
  position: 'absolute',
}

export default function Loader({ className, position }) {
  return (
    <LoaderWrapper className={className} $position={position}>
      <Spinner />
    </LoaderWrapper>
  )
}

Loader.defaultProps = defaultProps
