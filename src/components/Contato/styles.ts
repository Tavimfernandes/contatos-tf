import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.corPrincipal};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
`

export const Descricao = styled.input`
  color: ${variaveis.branco};
  font-size: 14px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: none;
  background-color: transparent;
`

export const LegendaDescricao = styled.span`
  color: ${variaveis.branco};
  font-size: 14px;
  display: inline-block;
  width: 100%;
  font-weight: bold;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.corPrincipal};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.branco2};
  border-radius: 8px;
  margin-right: 8px;
`
