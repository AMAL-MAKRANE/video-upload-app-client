import React, { useMemo } from 'react'
import styled from 'styled-components'

const getParagraphSize = (size = 'medium') => {
  const defaultSize = {
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
  }

  const sizes = {
    mini: { fontWeight: 'normal', fontSize: '13px', lineHeight: '150%' },
    small: { fontWeight: 'normal', fontSize: '14px', lineHeight: '150%' },
    medium: defaultSize,
    large: { fontWeight: 'normal', fontSize: '18px', lineHeight: '150%' },
  }

  return sizes[size] || defaultSize
}

export const getHeadingSize = (props) => {
  const { tag, size } = props

  const headings = {
    h1: { fontWeight: 'bold', fontSize: '48px', lineHeight: '120%' },
    h2: { fontWeight: 'bold', fontSize: '40px', lineHeight: '120%' },
    h3: { fontWeight: 600, fontSize: '32px', lineHeight: '120%' },
    h4: { fontWeight: 600, fontSize: '24px', lineHeight: '120%' },
    h5: { fontWeight: '600', fontSize: '20px', lineHeight: '140%' },
    h6: { fontWeight: 600, fontSize: '18px', lineHeight: '26px' },
  }

  return headings[tag] || getParagraphSize(size)
}

const defaultProps = {
  className: '',
}

const Text = styled.p`
  font-style: normal;
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;

  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : 'inheret')};
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 'inheret')};
  line-height: ${({ $lineHeight }) => ($lineHeight ? $lineHeight : 'inheret')};
  text-transform: ${({ $uppercase }) => ($uppercase ? 'uppercase' : 'inheret')};
`

const TextChild = ({ children, tag, className, size, ...props }) => {
  const { fontSize, fontWeight, lineHeight, uppercase } = useMemo(
    () => getHeadingSize({ tag, size }),
    [tag, size]
  )

  return (
    <>
      <Text
        className={className}
        as={tag}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $lineHeight={lineHeight}
        $uppercase={uppercase}
        {...props}
      >
        {children}
      </Text>
    </>
  )
}

const MemoTextChild = React.memo(TextChild)

export default MemoTextChild
