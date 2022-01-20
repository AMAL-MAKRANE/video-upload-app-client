import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--background-main-color);
  min-height: 100vh;
  padding: 34px;

  @media screen and (max-width: 450px) {
    padding: 10px;
  }
`

export default function AuthLayout({ children }) {
  return <Container>{children}</Container>
}
