import React, { useState, useEffect } from 'react'
import * as S from './styled'

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <S.TopToBtm>{showTopBtn && <S.CustomIcon onClick={goToTop} />}</S.TopToBtm>
  )
}
export default ScrollToTop
