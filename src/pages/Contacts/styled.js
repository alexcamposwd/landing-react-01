import styled from 'styled-components'
import backImg from '../../assets/images/img02.jpg'

export const ContactsWrapper = styled.article`
  width: 100%;
`

export const FieldImg = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: container;
  background-position: -100px -600px;
  background-attachment: fixed;

  button {
    position: absolute;
    width: 450px;
    font-size: 22px;
    font-weight: 600;
    bottom: 40px;
    right: 40px;
    padding: 7px 20px;
    outline: none;
    border: none;
    border-radius: 7px;
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
    height: 500px;
    margin-bottom: 20px;
    background-position: -350px -650px;

    button {
      display: flex;
      align-items: center;
      text-align: center;
      width: auto;
      font-size: 18px;
      bottom: 30px;
    }
  }
  @media (max-width: 550px) {
    height: 450px;
    margin-bottom: 10px;
    background-position: -420px -600px;
    background-attachment: fixed;

    button {
      width: auto;
      font-size: 16px;
      bottom: 30px;
      padding: 7px 20px;
    }
  }
`

export const FieldContacts = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  p {
    font-size: 22px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.black};
    padding: 30px 0;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    margin-bottom: 10px;

    p {
      font-size: 16px;
      padding: 10px 0;
    }
  }
  @media (max-width: 550px) {
    p {
      font-size: 14px;
      padding: 10px 0;
    }
  }
`
