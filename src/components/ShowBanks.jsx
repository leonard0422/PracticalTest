import { useBanks } from '../context/BanckContext'
import { Col } from 'react-bootstrap'
import CardBank from './CardBank'

export default function ShowBanks () {
  const DataBank = useBanks()
  if (DataBank === undefined) {
    return <h1>Cargando...</h1>
  }
  return DataBank.map((item, key) => {
    return (
            <Col key={key} sm={6} md={6} lg={4} xl className='my-2' >
                <CardBank data={item} />
            </Col>
    )
  })
}
