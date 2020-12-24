import React, { FormEvent, ChangeEvent, useState } from 'react'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Auth from '../components/auth'
import { Button } from '@material-ui/core'

const useInput = (initialValue: string) => {
  const [value, set] = useState(initialValue)
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => set(e.target.value),
  }
}

export default function SignIn() {
  const emailProps = useInput('')
  const pwProps = useInput('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(emailProps.value, pwProps.value)
      .then(() => {
        console.log('login')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const logout = () => {
    auth.signOut()
  }

  const [user, loading, error] = useAuthState(auth)

  return (
    <>
      loading: {loading.toString()}, user: {user && user.email},{' '}
      {error && `error: ${error.message}`}
      <br />
      <Button variant="outlined" onClick={logout}>
        Log Out
      </Button>
      <Auth
        title="Sign In"
        handleSubmit={handleSubmit}
        emailProps={emailProps}
        pwProps={pwProps}
      />
    </>
  )
}
