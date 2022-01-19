import styled from 'styled-components'
import Button from '../components/ui/Button'
const Title = styled.h1`
  font-size: 50px;
  color: red;
`

const BiggerTitle = styled(Title)`
  font-size: 100px;
`

export default function Home() {
  return (
    <BiggerTitle>
      My page
      <Button width="full">Add Video</Button>
    </BiggerTitle>
  )
}
