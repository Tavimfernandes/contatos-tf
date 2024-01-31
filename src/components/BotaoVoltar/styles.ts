import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const BotaoVoltar = styled(Link)`
  background-color: ${variaveis.corSecundaria};
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
`
