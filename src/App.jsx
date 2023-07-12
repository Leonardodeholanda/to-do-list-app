
import { Container, AppContainer } from './styles'
import { Perfil } from './Components/Perfil'
import { Days } from './Components/Days'
import { Tasks } from "./Components/Tasks"
import { Menu } from './Components/Menu'

function App() {
  return (
    <Container>
      <AppContainer>
        <Perfil />
        <Days />
        <Tasks />
        <Menu />
      </AppContainer>
    </Container>
  )
}

export default App
