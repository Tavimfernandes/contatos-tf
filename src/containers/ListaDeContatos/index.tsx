import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'

import { RootReducer } from '../../store'
import { Container } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
