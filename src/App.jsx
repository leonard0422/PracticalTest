import { Container, Row } from 'react-bootstrap'
import BankCont from './context/BanckContext'
import ShowBanks from './components/ShowBanks'
import './App.css'
function App () {
  return (
    <BankCont>
      <Container fluid>
        <Row>
          <ShowBanks />
        </Row>
      </Container>
    </BankCont>
  )
}

export default App
