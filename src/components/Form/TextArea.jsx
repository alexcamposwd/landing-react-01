import React from 'react'
import * as S from './styled'

const TextArea = ({ name, text, col, row, placeholder }) => {
  return (
    <S.ContainerText>
      <label htmlFor={name}>{text}</label>
      <textarea name={name} cols={col} rows={row} placeholder={placeholder} />
    </S.ContainerText>
  )
}

export default TextArea
