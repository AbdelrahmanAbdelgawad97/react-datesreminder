import { Button, Container, Row, Col } from 'react-bootstrap';

function BtnControls({del, view}) {
    return(
        <>
            <Row className='justify-content-center my-2'>
            <Col sm="8" className="d-flex justify-content-between">
                <button onClick={del} className='btn-style p-2'>Delete All</button>
                <button onClick={view} className='btn-style p-2'>Disply Data</button>
            </Col>
            </Row>
        </>
    )
}

export default BtnControls;