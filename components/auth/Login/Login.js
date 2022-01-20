import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../../ui/LinkButton'
import Spacer from '../../ui/Spacer'
import Input from '../../ui/Input'
import Loader from '../../ui/Loader'
import { setAuthToken } from '../../../utils/auth'

import * as styles from './styles'

import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      token
    }
  }
`
const Login = () => {
  const router = useRouter()

  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [login] = useMutation(LOGIN_MUTATION)

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      const {
        data: { login: result },
      } = await login({
        variables: {
          input: {
            email: email,
            password: password,
          },
        },
      })
      if (result.success) {
        setAuthToken(result.token)

        router.replace('/')
      }
      setLoading(false)
      throw result
    } catch (e) {
      console.log(e)
      setMessage(e.message)
      setLoading(false)
      setDisabled(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <styles.Wrapper>
      {loading && <Loader />}

      <styles.FormContainer>
        <form onSubmit={handleLogin}>
          <styles.Title h4>Welcome back to Snipfeed</styles.Title>

          <Spacer y={40} />
          {message && <styles.ErrorMessage>{message}</styles.ErrorMessage>}
          <Input name="email" label="Email" value={email} onChange={setEmail} />

          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
          />

          <LinkButton>Forgot your password?</LinkButton>

          <Spacer y={24} />

          <styles.LoginButton disabled={disabled} htmlType="submit">
            Log in
          </styles.LoginButton>
          <Spacer y={24} />

          <styles.DontHaveAccountText p size="small">
            {"Don't have an account?"} <LinkButton>Sign up</LinkButton>
          </styles.DontHaveAccountText>
        </form>
      </styles.FormContainer>
    </styles.Wrapper>
  )
}

export default Login
