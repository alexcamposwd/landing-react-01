import React from 'react'
import * as S from './styled'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.CopyRight data-cy='copyright'>
        <span>Alex Campos</span> &copy; 2022
      </S.CopyRight>
    </S.FooterWrapper>
  )
}

export default Footer
