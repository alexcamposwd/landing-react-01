import styled from 'styled-components'

export const DescWrapper = styled.article`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.light};
`

export const Environment = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 30px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`

export const Details = styled.div`
  width: 26%;

  img {
    width: 100%;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    padding: 10px 0 5px 0;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.black};
    padding: 10px 0 10px 0;
  }

  @media (max-width: 750px) {
    width: 90%;

    img {
      width: 100%;
    }

    h3 {
      font-size: 17px;
    }

    p {
      padding: 10px 0 30px 0;
    }
  }
  @media (max-width: 550px) {
    width: 100%;

    h3 {
      font-size: 16px;
      padding: 10px 0 5px 0;
    }

    p {
      padding: 10px 0 30px 0;
    }
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.green05};
`
