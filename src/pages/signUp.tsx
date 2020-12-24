import React, { FormEvent, ChangeEvent, useState } from 'react'
import { auth } from '../lib/firebase'

import Auth from '../components/auth'

const useInput = (initialValue: string) => {
  const [value, set] = useState(initialValue)
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => set(e.target.value),
  }
}

export default function SignUp() {
  const emailProps = useInput('')
  const pwProps = useInput('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(emailProps.value, pwProps.value)
      .then(() => {
        console.log('user created')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <Auth
      title="Sign Up"
      handleSubmit={handleSubmit}
      emailProps={emailProps}
      pwProps={pwProps}
    />
  )
}
