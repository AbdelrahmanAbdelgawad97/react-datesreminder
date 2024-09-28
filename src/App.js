import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

import person from './data'
import ApointData from './Component/AppointmentData'
import ShowData from './Component/ShowData'
import BtnControls from './Component/controls'
import { useState } from 'react';

function App() {

    const [personData, setPersonData] = useState(person);

    const deleteData =()=>{
      setPersonData([])
    }

    const viewData =()=>{
      setPersonData(person)
    }

  return (
    <div className="font">
      <Container className='py-5'>
        <ApointData person={personData}></ApointData>
        <ShowData person={personData}></ShowData>
        <BtnControls del={deleteData} view={viewData}/>
      </Container>
    </div>
  );
}

export default App;
