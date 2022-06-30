import styled, { css } from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'

export const TopToBtm = styled.div`
  position: relative;
`

export const CustomStyleIcon = css`
  position: fixed;
  bottom: 15px;
  right: 40px;
  z-index: 20;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.goldmd};
  border-radius: 50%;
  height: 27px;
  width: 25px;
  color: ${(props) => props.theme.colors.goldmd};
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.gold};
    border: 2px solid ${(props) => props.theme.colors.gold};
  }
`

export const CustomIcon = styled(FaAngleUp)`
  ${CustomStyleIcon}
`
