import React from 'react'
import * as S from './styled'

import img01 from '../../assets/images/img03.jpg'
import img02 from '../../assets/images/img04.jpg'
import img03 from '../../assets/images/img05.jpg'

const Description = () => (
  <S.DescWrapper>
    <S.Environment>
      <S.Details>
        <img src={img01} alt='Salas de estar/jantart' />
        <h3>Estar</h3>
        <S.Line />
        <p>
          Os espaços da sala de estar e jantar também são integrados
          visualmente, porém a divisão dos mesmos é feita pela circulação
          vertical.
        </p>
      </S.Details>
      <S.Details>
        <img src={img02} alt='Salas de estar/jantart' />
        <h3>Jantar</h3>
        <S.Line />
        <p>
          Neste caso, a escada e o jardim interno, participam da decoração da
          casa, como um marco da arquitetura entre as duas salas.
        </p>
      </S.Details>
      <S.Details>
        <img src={img03} alt='Salas de estar/jantart' />
        <h3>Gourmet</h3>
        <S.Line />
        <p>
          Da entrada principal pode–se ver todo o living até o ambiente
          destinado a área gourmet. Ambientes amplos e iluminados.
        </p>
      </S.Details>
    </S.Environment>
  </S.DescWrapper>
)

export default Description
