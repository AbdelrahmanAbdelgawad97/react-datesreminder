import {Row, Col} from 'react-bootstrap';
// import person from '../data'

function ShowData({person}) {
    return(
        <>
            <Row className='justify-content-center'>
                <Col sm="8" className="">
                    <div className='rectangle p-3 position-relative'>
                        {person.length ? (person.map(item => {
                            return (
                                <div key={item.key} className='d-flex border-bottom mx-5 py-2'>
                                    <img className='img-avatar' src={item.img} />
                                    <div className='px-3 '>
                                        <p className='d-inline fs-5'>{item.name}</p>
                                        <p className='fs-6'>{item.date}</p>
                                    </div>
                                </div>
                            )
                        })) : <h4 className='position-absolute top-50 start-50 transition'>You Don't Have Appointment Today</h4>}

                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ShowData;