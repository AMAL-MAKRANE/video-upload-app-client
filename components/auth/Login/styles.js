import styled from 'styled-components'
import Button from '../../ui/Button'
import Text from '../../ui/Text'

export const Wrapper = styled.div`
  max-width: 494px;
  margin: 0 auto;

  input {
    background: transparent;
    color: var(--text-primary-color);
  }
`

export const Title = styled(Text)`
  text-align: center;
`

export const LoginButton = styled(Button)`
  && {
    width: 100%;
  }
`

export const LoginContent = styled.div`
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 20px;
  box-shadow: 40px 114px 200px rgba(0, 0, 0, 0.16);

  @media (min-width: 768px) {
    padding: 56px 48px;
  }
`

export const DontHaveAccountText = styled(Text)`
  color: var(--text-light-color);
  text-align: center;
`

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 20px;
  box-shadow: 40px 114px 200px rgba(0, 0, 0, 0.16);

  @media (min-width: 768px) {
    padding: 56px 48px;
  }
`

export const ErrorMessage = styled.div`
  color: red;
  border: solid 1px;
  border-color: rgb(252 165 165);
  padding: 30px;
`
