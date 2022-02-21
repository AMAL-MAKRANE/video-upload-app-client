import styled from 'styled-components'
import Button from '../ui/Button'
import Text from '../ui/Text'

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const LeftContainer = styled.div`
    margin-left: 0;
    margin-top: 0;
    padding: 80px 0px 20px 0px;
    flex-basis: 20%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
  }
`
export const Wrapper = styled.div`
margin: 0;
background-color: #eaeaea;
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-items: center;
`

export const Title = styled(Text)`
  text-align: center;
`
export const TitleText = styled(Text)`
  color: var(--text-light-color);
  text-align: center;
`
export const Link = styled.link`
  color: var(--text-light-color);
  text-align: center;
`

export const AddVideoButton = styled(Button)`
  && {
    width: 20%;
  }
`

export const Icons = styled.div`
  display:flex;
  flex-direction:row;
  width:50%;
`

export const ErrorMessage = styled.div`
  color: red;
  border: solid 1px;
  border-color: rgb(252 165 165);
  padding: 30px;
`
