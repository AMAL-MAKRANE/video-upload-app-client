import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

const BiggerTitle = styled(Title)`
  font-size: 100px;
`

export default function Home() {
  return <BiggerTitle>My page</BiggerTitle>
}
