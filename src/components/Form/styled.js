import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.blackopacity};
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  justify-content: center;
  margin: 30px;
  align-items: center;
  box-shadow: 0 5px 16px ${(props) => props.theme.colors.blackopacity};
  background: ${(props) => props.theme.colors.grey4};
  color: ${(props) => props.theme.colors.black};
  z-index: 10;
  border-radius: 10px;

  h1 {
    font-size: 22px;
    font-weight: 500;
    padding: 10px 0px;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 750px) {
    height: 550px;
    margin: 30px;

    h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    height: auto;
    margin: 15px;
    padding: 30px 0px;

    h1 {
      font-size: 18px;
    }
  }
`

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 90%;
  }
`

export const FieldContact = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`

export const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 15px;

  &:nth-child(2) {
    margin-left: 20px;
  }

  @media (max-width: 750px) {
    &:nth-child(2) {
      margin-left: 0px;
    }
  }
`

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 25px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.green04};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`

export const ErrorMessage = styled.div`
  width: auto;
  margin-top: 5px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  background-color: ${(props) => props.theme.colors.redmd};
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 550px) {
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
  }
`

export const SuccessMessage = styled.div`
  width: auto;
  margin-top: 15px;
  padding: 10px 20px;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  border: 2px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  z-index: 100;

  @media (max-width: 550px) {
    margin-top: 10px;
    padding: 10px 10px;
    font-size: 15px;
  }
`

export const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  padding: 0;
  color: ${(props) => props.theme.colors.white};
  z-index: 10;
  cursor: pointer;
`

export const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;

  label {
    display: flex;
    width: auto;
    text-align: end;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
    padding: 5px 0 5px 20px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border-radius: 0;
    border: none;
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 750px) {
    label {
      font-size: 13px;
    }

    input {
      padding: 7px;
      font-size: 14px;
    }
  }
`

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 300px;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;

  label {
    width: auto;
    height: auto;
    font-size: 14px;
    min-height: 150px;
    max-height: 250px;
    text-align: start;
    font-weight: bold;
    padding: 10px 0 0 20px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }

  textarea {
    width: 100%;
    height: auto;
    min-height: 150px;
    max-height: 250px;
    text-align: start;
    font-size: 15px;
    font-weight: 400;
    padding: 11px;
    border: none;
    outline: none;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 750px) {
    label {
      font-size: 14px;
      min-height: 120px;
      max-height: 200px;
    }

    textarea {
      min-height: 120px;
      max-height: 200px;
      font-size: 14px;
    }
  }
`
