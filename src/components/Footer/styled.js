import styled, { css } from 'styled-components'
import { FaChevronCircleUp } from 'react-icons/fa'

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.green04};
`

export const CopyRight = styled.p`
  color: ${(props) => props.theme.colors.sandgold};
  font-size: 17px;
  text-align: right;
  min-width: 360px;
  padding: 20px 100px 10px 0;

  span {
    font-size: 18px;
    font-weight: 600;
    font-weight: bold;
    font-style: italic;
    color: ${(props) => props.theme.colors.gold};
    padding: 10px;
  }
`

export const CustomStyleIcon = css`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  color: ${(props) => props.theme.colors.gold};

  &:hover {
    transform: scale(1.1);
  }
`

export const CustomIconUp = styled(FaChevronCircleUp)`
  ${CustomStyleIcon}
`
