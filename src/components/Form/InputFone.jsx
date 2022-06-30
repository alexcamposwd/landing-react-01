/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import * as S from './styled'

import { foneNumber } from '../../hooks/maskInput'

const InputFone = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
  const handleKeyUp = useCallback((e) => {
    foneNumber(e)
  }, [])

  return (
    <S.InputControl>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        onKeyUp={handleKeyUp}
      />
    </S.InputControl>
  )
}

export default InputFone
