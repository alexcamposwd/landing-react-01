/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styled'

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => (
  <S.InputControl>
    <label htmlFor={name}>{text}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
    />
  </S.InputControl>
)

export default Input
