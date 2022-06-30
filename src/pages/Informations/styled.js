import styled from 'styled-components'

export const InformWrapper = styled.article`
  width: 100%;
  height: auto;
  padding: 50px 30px 20px 30px;
  background-color: ${(props) => props.theme.colors.light};

  h1 {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    text-align: center;
  }

  @media (max-width: 750px) {
    padding: 30px 20px 10px 20px;

    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 550px) {
    padding: 30px 10px 10px 15px;

    h1 {
      font-size: 24px;
    }
  }
`

export const Articles = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  padding: 50px 0;
  justify-content: center;
  gap: 50px;

  div {
    width: 26%;

    h3 {
      font-size: 25px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      color: ${(props) => props.theme.colors.green05};
      text-align: left;
      padding-bottom: 20px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Montserrat', sans-serif;
      color: ${(props) => props.theme.colors.green05};
      text-align: justify;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    gap: 30px;

    div {
      width: 96%;

      h3 {
        font-size: 22px;
        padding-bottom: 10px;
      }

      p {
        font-size: 15px;
        text-align: justify;
      }
    }
  }
  @media (max-width: 550px) {
    padding: 20px 10px;
    gap: 30px;

    div {
      width: 96%;

      h3 {
        font-size: 18px;
        padding-bottom: 7px;
      }

      p {
        font-size: 15px;
        text-align: justify;
      }
    }
  }
`
