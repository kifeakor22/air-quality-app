import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './health-info.css';

const ColourfulCards = () => {
  const cardData = [
    { colour: 'vgood', text: 'Good (0-25): Safe to exercise for almost everyone.', order: "1" },
    { colour: 'good', text: 'Moderate (26-50): May affect breathing for asthmatics.', order: "4" },
    { colour: 'fair', text: 'Moderately Unhealthy (51-100): Exercise indoors if at risk.', order: "2" },
    { colour: 'poor', text: 'Unhealthy for Sensitive Groups (101-150): Exercise indoors.', order: "5" },
    { colour: 'vpoor', text: 'Very Unhealthy (151-200): DO NOT exercise outdoors.' , order: "3"},
    { colour: 'hazardous', text: 'Hazardous (201-500): Emergency - EVACUATE.', order: "6" },
  ];

  return (
    <div className='mb-3 colour-index-container align-self-center d-flex'>
      <Row className="justify-content-end">
        {cardData.map((card, index) => (
          <Col md={4} key={index} className="flex-grow-1">
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
    </div>
  );
};

export default ColourfulCards;
