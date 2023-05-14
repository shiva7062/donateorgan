import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hospitals from './hospitals.json';
import bg3 from '../img/bg3.png';
import './hospital.css';

function HospitalList() {
  return (
    <Container>
      <Row>
        {hospitals.map((hospital, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="my-3">
            <div className="p-3 border rounded hospital">
              <h4>{hospital.name}</h4>
              <p>{hospital.location}</p>
              <p>{hospital.organs.join(', ')}</p>
              <a href={hospital.url} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HospitalList;
