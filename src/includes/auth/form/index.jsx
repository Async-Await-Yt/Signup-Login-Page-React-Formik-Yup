import React from 'react'
import components from "@components"
import { useFormik } from 'formik'
import './auth.scss'

const {Button, Title, Input } = components

const AuthForm = ({ type, initialValues, schema }) => {
    
    const {values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: ()=>{}
    })

  return (
      <form onSubmit={handleSubmit}>
          <Title title={type} />
          
          <Input type="text" label="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}
              placeholder="Enter name" className={(errors.name && touched.name) ? 'error' : ''}
              error={(errors.name && touched.name) ? errors.name : null} />
          <Input type="email" label="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
              placeholder="enter email"  className={(errors.email && touched.email) ? 'error' : ''}
              error={(errors.email && touched.email) ? errors.email : null} />
          <Input type="password" label="password" name="password" value={values.password} onChange={handleChange}
              onBlur={handleBlur} placeholder="enter password"  className={(errors.password && touched.password) ? 'error' : ''}
              error={(errors.password && touched.password) ? errors.password : null} />
          
          <Button>{type}</Button>
          
    </form>
  )
}

export default AuthForm