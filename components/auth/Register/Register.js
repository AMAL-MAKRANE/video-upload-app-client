import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../../ui/LinkButton'
import Spacer from '../../ui/Spacer'
import Input from '../../ui/Input'
import Loader from '../../ui/Loader'
import { setAuthToken } from '../../../utils/auth'

import * as styles from '../Login/styles'

import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'

export const REGISTER_MUTATION = gql`
  mutation register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      success
      message
      token
    }
  }
`

const Register = () => {
  const router = useRouter()

  // Form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [register] = useMutation(REGISTER_MUTATION)

  const handlRegister = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      const {
        data: { register: result },
      } = await register({
        variables: {
          registerInput: {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
          }
        },
      })
      console.log(result)
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
    // todo match password
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
        <form onSubmit={handlRegister}>
          <styles.Title h4>Welcome back to Snipfeed</styles.Title>

          <Spacer y={40} />
          {message && <styles.ErrorMessage>{message}</styles.ErrorMessage>}
          <h1>Register</h1>
          <Input
            label='Username'
            placeholder='Username..'
            name='name'
            type='text'
            onChange={setName}
          />
          <Input
            label='Email'
            placeholder='Email..'
            name='email'
            type='email'
            onChange={setEmail}
          />
          <Input
            label='Password'
            placeholder='Password..'
            name='password'
            type='password'
            onChange={setPassword}
          />
          <Input
            label='Confirm Password'
            placeholder='Confirm Password..'
            name='confirmPassword'
            type='password'
            onChange={setConfirmPassword}
          />

          <Spacer y={24} />

          <styles.LoginButton disabled={disabled} htmlType="submit">
            register
          </styles.LoginButton>
          <Spacer y={24} />

          <styles.DontHaveAccountText p size="small">
            {"you already have an account?"} <LinkButton>Register</LinkButton>
          </styles.DontHaveAccountText>
        </form>
      </styles.FormContainer>
    </styles.Wrapper>
  )
}

export default Register
