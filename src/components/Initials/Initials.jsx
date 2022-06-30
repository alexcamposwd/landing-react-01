import React, { useState } from 'react'
import * as S from './styled'

import imgInitial from '../../assets/images/img01.jpg'
import Form from '../../components/Form'

const Initials = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <S.InitialsWrapper>
      <S.Image src={imgInitial} alt='Fachada Principal' />
      <article>
        <S.Promo>
          <h2>
            Aproveite sua vida e viva ao máximo em uma confortável residência no
            Vale do Paraiba.
          </h2>
          <h3>R$ 1.630.000,00</h3>
          <S.Info>
            <p>
              Pav. Térreo: <span>148,60 m2</span>
            </p>
            <p>
              Pav. Superior: <span>119,65 m2</span>
            </p>
            <h4>
              Total: <span>268,25 m2</span>
            </h4>
          </S.Info>
          <S.Btn>
            <button onClick={openModal}>Agende com nossos consultores</button>
          </S.Btn>
        </S.Promo>
      </article>
      <Form showModal={showModal} setShowModal={setShowModal} />
    </S.InitialsWrapper>
  )
}

export default Initials
