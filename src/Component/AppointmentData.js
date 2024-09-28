import {Row, Col} from 'react-bootstrap';
// import person from '../data'

function ApointData({person}) {
    return (
        <>
            <Row className='justify-content-center'>
                <Col sm="8" className="">
                    <h4>You Have {person.length} Appointments</h4>
                </Col>
            </Row>
        </>
    )
}

export default ApointData;