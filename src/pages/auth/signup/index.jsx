import React from 'react'
import includes from '@includes'
import * as Yup from 'yup'

const { AuthForm } = includes

const schema = Yup.object({
  name: Yup.string().trim().required(),
  email: Yup.string().trim().required().email(),
  password: Yup.string().trim().required().min(6).max(24),
})

const Signup = () => {
  return (
    <AuthForm type='signup' initialValues={{ name: '', email: '', password: '' }} schema={schema} />
  )
}

export default Signup