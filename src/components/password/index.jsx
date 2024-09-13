import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoEyeOffOutline } from 'react-icons/io5'

const Password = ({ name, value, onChange=()=>{}, placeholder, className="", onBlur=()=>{} }) => {
    
    const [show, setShow] = useState(false)

    return (
        <>
            <input
                type={show ? 'text': 'password'}
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
            {/* icons */}
            <span onClick={() => setShow(prev => !prev)}>{ show ? <FaEye />: <IoEyeOffOutline/>}</span>
        </>
    )
}

export default Password