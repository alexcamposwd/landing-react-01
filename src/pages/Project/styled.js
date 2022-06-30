import styled from 'styled-components'

export const ProjectWrapper = styled.article`
  width: 100%;
  height: auto;
`

export const ProjectInfo = styled.section`
  display: flex;
  width: 100%;
  padding: 0 30px;
  align-items: flex-start;

  @media (max-width: 750px) {
    padding: 0 20px;
  }
  @media (max-width: 550px) {
    padding: 0 15px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Line = styled.div`
  width: 64%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.green04};
`

export const Plant = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 34px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    text-align: center;
    padding-bottom: 20px;
  }

  img {
    width: 60vw;
    height: auto;
  }

  ul {
    display: flex;
    padding-bottom: 50px;
  }

  li {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green05};
    padding: 10px;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 28px;
      padding-bottom: 20px;
    }

    img {
      width: 70vw;
    }

    ul {
      padding-bottom: 20px;
    }

    li {
      font-size: 14px;
      padding: 10px;
    }
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 20px;
      padding-bottom: 15px;
    }

    img {
      width: 90vw;
    }

    ul {
      padding-bottom: 20px;
    }

    li {
      font-size: 12px;
      padding: 5px;
    }
  }
`

export const legend = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  h3 {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    padding: 15px 0 10px 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    padding: 19px 0 10px 0;
  }

  @media (max-width: 750px) {
    h3 {
      font-size: 18px;
      padding: 10px 0;
    }

    p {
      font-size: 15px;
      padding: 15px 0 10px 0;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    justify-content: space-around;

    h3 {
      font-size: 16px;
      padding: 10px 0;
    }

    p {
      font-size: 15px;
      padding: 12px 0 10px 0;
    }
  }
`
