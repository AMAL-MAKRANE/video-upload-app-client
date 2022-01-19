import Link from 'next/link'
import styled from 'styled-components'
export const StyledLink = styled.a`
  font-size: 14px;
  background: var(--button-primary-color);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  cursor: pointer;
`

const ButtonLink = ({ href = '#', children }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  )
}

export default ButtonLink
