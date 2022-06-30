import styled from 'styled-components'

export const InitialsWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: inline-block;
  overflow: hidden;

  article {
    position: relative;
    display: flex;
  }

  @media (max-width: 750px) {
  }
  @media (max-width: 550px) {
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  object-fit: cover;
`

export const Promo = styled.div`
  position: absolute;
  max-width: 650px;
  right: 50px;
  bottom: 50px;
  background-color: rgba(255, 255, 255, 0.6);

  h2 {
    font-size: 26px;
    font-weight: 400;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green05};
    padding: 30px 30px 20px 30px;
  }

  h3 {
    width: 280px;
    height: 45px;
    font-size: 35px;
    font-weight: 500;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    margin-left: 30px;
  }

  @media (max-width: 750px) {
    right: 40px;
    bottom: 40px;

    h2 {
      font-size: 24px;
      padding: 20px 20px 10px 20px;
    }

    h3 {
      width: 250px;
      height: 40px;
      font-size: 30px;
      margin-left: 20px;
    }
  }
  @media (max-width: 550px) {
    right: 0px;
    bottom: 0px;

    h2 {
      font-size: 18px;
      padding: 10px 10px 5px 10px;
    }

    h3 {
      font-size: 16px;
      margin-left: 10px;
    }
  }
`

export const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 30px 15px 30px;
  gap: 20px;

  p {
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green05};
  }

  span {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green04};
    padding-left: 4px;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.green05};

    span {
      font-size: 19px;
      font-weight: 600;
      text-align: left;
      font-family: 'Montserrat', sans-serif;
      color: ${(props) => props.theme.colors.reddark};
    }
  }

  @media (max-width: 750px) {
    padding: 20px 15px 15px 15px;
    gap: 10px;

    p {
      font-size: 13px;
    }

    span {
      font-size: 15px;
      padding-left: 4px;
    }

    h4 {
      font-size: 13px;

      span {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 550px) {
    display: flex;
    width: 100%;
    padding: 10px;
    gap: 7px;

    p {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      font-family: 'Montserrat', sans-serif;
      color: ${(props) => props.theme.colors.green05};
    }

    span {
      font-size: 15px;
    }

    h4 {
      font-size: 14px;

      span {
        font-size: 15px;
      }
    }
  }
`

export const Btn = styled.div`
  width: auto;
  bottom: 20px;
  text-align: center;
  padding: 0 30px 30px 30px;

  button {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    padding: 7px 20px;
    outline: none;
    border: none;
    color: ${(props) => props.theme.colors.sandgold};
    background-color: ${(props) => props.theme.colors.reddark};
    box-shadow: 6px 8px 6px ${(props) => props.theme.colors.blackopacity};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.goldmd};
      background-color: ${(props) => props.theme.colors.redhover};
    }
    &:active {
      box-shadow: 3px 5px 8px ${(props) => props.theme.colors.blackopacity};
    }
  }

  @media (max-width: 750px) {
    bottom: 20px;
    padding: 0 20px 20px 20px;

    button {
      font-size: 22px;
      padding: 7px 20px;
    }
  }
  @media (max-width: 550px) {
    bottom: 10px;
    padding: 0 15px 15px 15px;

    button {
      font-size: 18px;
      padding: 7px 20px;
    }
  }
`
