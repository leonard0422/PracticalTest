import { Card, Col, Container, Row } from 'react-bootstrap'
import ListGroupBank from './ListGroupBank'
export default function CardBank ({ data }) {
  const { bankName, description, url, age } = data

  return (
    <Card className='card-min-height' style={{ width: '18rem' }}>
      <Container>
        <Row>
          <Col>
            <Card.Img className='image-content' variant="top" src={url} />
          </Col>
        </Row>
      </Container>
      <Card.Body>
        <Card.Title>{bankName}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroupBank age={age} />
    </Card>
  )
}
