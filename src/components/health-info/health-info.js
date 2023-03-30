import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './health-info.css';

const ColourfulCards = () => {
  const cardData = [
    { colour: 'vgood', text: 'Good (0-25): Air quality is good. It’s safe to exercise outdoors.' },
    { colour: 'good', text: 'Moderate (26-50): Air quality is fine. Raised levels of pollutants may affect your breathing if you exercise outdoors, especially if you have asthma or allergies.' },
    { colour: 'fair', text: 'Moderately Unhealthy (51-100): Raised levels of pollutants may affect your breathing if you exercise outdoors, even for healthy individuals. Pollutants can cause health problems if you have a lung or heart condition. Try to exercise indoors or keep your outdoor workout short.' },
    { colour: 'poor', text: 'Unhealthy for Sensitive Groups (101-150): Pollutant concentrations affect everyone, especially those with lung or heart problems. Exercise indoors to reduce exposure to pollution.' },
    { colour: 'vpoor', text: 'Very Unhealthy (151-200): Pollutant concentrations can cause health problems for everyone. DO NOT exercise outdoors.' },
    { colour: 'hazardous', text: 'Hazardous (201-500): Air quality is bad enough to be declared an emergency. Stay indoors or evacuate the area until air quality improves.' },
  ];

  return (
    <Container fluid>
      <Row className="justify-content-end">
        {cardData.map((card, index) => (
          <Col md={4} key={index}>
            <Card className={`text-black ${card.colour}`}>
              <Card.Body>
                <Card.Text>
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ColourfulCards;
