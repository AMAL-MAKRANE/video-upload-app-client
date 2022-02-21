import styled from 'styled-components'
import Link from 'next/link'
import styles from '../styles/home.module.css'

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

const BiggerTitle = styled(Title)`
  font-size: 100px;
`

export default function Home() {

  return (
    <>
      <BiggerTitle>fastcast</BiggerTitle>
      <Link className={styles.link} href="/auth/signin">Signin</Link>
      <Link href="/auth/signup">Signup</Link>
    </>
  ) 
}
