import { ListGroup } from 'react-bootstrap'
export default function ListGroupBank ({ age }) {
  return (
        <ListGroup as="ol">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto" >
                    <div className="fw-bold">Age: {age}</div>
                </div>
            </ListGroup.Item>
            {/* <ItemsListGroupBank data={data} /> */}

        </ListGroup>
  )
}
