import { ListGroup } from 'react-bootstrap'

export default function ItemsListGroupBank ({ data }) {
  return (
        <>
            {data.map((item, key) => {
              if (item.age) {
                return (
                    <ListGroup.Item
                        key={key}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto" >
                            <div className="fw-bold">Age: {item.age}</div>
                        </div>
                    </ListGroup.Item>
                )
              } else {
                return (
                    <ListGroup.Item
                        key={key}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto" >
                            <div className="fw-bold">Url: <a href={item.url}>{item.url}</a></div>
                        </div>
                    </ListGroup.Item>
                )
              }
            })
            }
        </>
  )
}
