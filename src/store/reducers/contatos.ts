import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Mariana Oliveira',
      email: 'mariana@gmail.com',
      telefone: '61912341234'
    },
    {
      id: 2,
      nome: 'Sofia Souza',
      email: 'sofia@gmail.com',
      telefone: '61912341234'
    },
    {
      id: 3,
      nome: 'Luna Martins',
      email: 'luna@gmail.com',
      telefone: '61912341234'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.telefone.toLowerCase() ===
          action.payload.telefone.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('já existe um contato com esse número')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
