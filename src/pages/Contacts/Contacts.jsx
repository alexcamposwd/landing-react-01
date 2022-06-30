import React, { useState } from 'react'
import * as S from './styled'
import Form from '../../components/Form'

const Contacts = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }
  return (
    <S.ContactsWrapper>
      <S.FieldImg>
        <button onClick={openModal}>Agende com nossos consultores</button>
      </S.FieldImg>
      <S.FieldContacts>
        <p>(11) 98888-8888</p>
        <p>email@gmail.com</p>
        <p>R. Marechal Rua, 100 - Sem Bairro - Cidade/SP</p>
      </S.FieldContacts>
      <Form showModal={showModal} setShowModal={setShowModal} />
    </S.ContactsWrapper>
  )
}

export default Contacts
