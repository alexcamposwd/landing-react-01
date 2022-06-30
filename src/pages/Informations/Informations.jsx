import React from 'react'
import * as S from './styled.js'

const Informations = () => {
  return (
    <S.InformWrapper>
      <h1>Você Sonha. A Gente Constrói!</h1>
      <S.Articles>
        <div>
          <h3>Empresa</h3>
          <p>
            Podemos contribuir de forma positiva na concretização de seu sonho,
            proporcionando uma maior comodidade desde a concepção projetual até
            a entrega das chaves, prestando assessoria total e executando
            trabalhos com o máximo de qualidade, personalização e estilo, além
            de alto padrão de acabamento e construção.
          </p>
        </div>
        <div>
          <h3>Conceito</h3>
          <p>
            A casa não é só um abrigo, é um lugar onde cada pessoa pode
            expressar sua personalidade, através dos materiais de construção
            escolhidos, das formas, dos volumes, cores, texturas. Isso resulta
            na expressão da identidade pessoal do cliente, enquanto indivíduo
            único e diferenciado.
          </p>
        </div>
        <div>
          <h3>Projeto</h3>
          <p>
            O pé direito duplo possibilitou a utilização de grandes esquadrias
            que, além de privilegiar a entrada de luz natural aos ambientes,
            fazem a integração entre o interno e o externo da casa e dão
            movimento a arquitetura. Na porta de entrada, uma esquadria se
            prolonga acima da laje, trazendo magnitude para o acesso principal
            da casa.
          </p>
        </div>
      </S.Articles>
    </S.InformWrapper>
  )
}

export default Informations
