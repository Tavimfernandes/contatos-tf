import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  margin-top: 24px;
  padding: 0 40px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    @media (max-width: 767px) {
      display: block;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: #000;
  border-color: ${variaveis.corPrincipal};
  width: 100%;
  margin: 4px 0;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corSecundaria};
  color: ${variaveis.branco};
`

export default EstiloGlobal
