import React from 'react'
import Password from '../password'
import { CiSquareInfo } from 'react-icons/ci'
import './input.scss'

const Input = ({label, type, name, value, placeholder, onChange=()=>{}, className='', onBlur=()=>{}, error=null}) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        {error ? <span id='error'><CiSquareInfo size={20} /> {error}</span>: null}
      </label>

      <section id="input-div">
        {
          type === 'password'
            ?
            <Password
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            onBlur={onBlur}
            autoCapitalize='off'
            autoComplete='off'
            autoCorrect='off'
            />
            :
      <input
      type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        onBlur={onBlur}
        autoCapitalize='off'
        autoComplete='off'
        autoCorrect='off'
        />
      }
        </section>
    </>
  )
}

export default Input