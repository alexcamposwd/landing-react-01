import React from 'react'
import * as S from './styled'

import pavTerreo from '../../assets/images/img_ph_01.jpg'
import pavSup from '../../assets/images/img_ph_02.jpg'

const Project = () => (
  <S.ProjectWrapper>
    <S.ProjectInfo>
      <S.Details>
        <S.Plant>
          <h1>Tornamos seu sonho em realidade!</h1>
          <img src={pavTerreo} alt='Planta Pav. Térreo' />
          <S.legend>
            <h3>Pav. Térreo</h3>
            <p>148,60 m2</p>
          </S.legend>
          <S.Line />
          <ul>
            <li>Salas</li>
            <li>Varanda Gournet</li>
            <li>Lavabo</li>
            <li>Cozinha</li>
            <li>Banho externo</li>
            <li>Piscina</li>
          </ul>
        </S.Plant>
        <S.Plant>
          <h1>Se sonho, nosso compromisso!</h1>
          <img src={pavSup} alt='Planta Pav. Térreo' />
          <S.legend>
            <h3>Pav. Superior</h3>
            <p>119,65 m2</p>
          </S.legend>
          <S.Line />
          <ul>
            <li>Suíte Master</li>
            <li>Suíte 01</li>
            <li>Suíte 02</li>
            <li>Banho 01</li>
            <li>Banho 02</li>
            <li>Closet</li>
            <li>Varanda</li>
          </ul>
        </S.Plant>
      </S.Details>
    </S.ProjectInfo>
  </S.ProjectWrapper>
)

export default Project
