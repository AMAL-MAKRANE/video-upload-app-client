import React from 'react'
import styled from 'styled-components'

const defaultProps = {
  x: 2,
  y: 2,
  inline: false,
}

const StyledSpacer = styled.span`
  display: ${({ $inline }) => ($inline ? 'inline-block' : 'block')};
  height: 0px;
  width: 0px;
  margin-left: ${({ $x }) => `${$x}px`};
  margin-top: ${({ $y }) => `${$y}px`};
`

const Spacer = ({ x, y, inline }) => {
  return <StyledSpacer $x={x} $y={y} $inline={inline} />
}

export default Spacer
