import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import carousel_2 from '../assets/carousel_2.jpg';
import image_1 from '../assets/image_1.png';

import { CSSProperties } from "react";

const Cards = () => {
    const consutlorio1Style: CSSProperties = {
        width: '100%',
        height: '50vh',
        objectFit: 'cover',
        borderTopRightRadius: '20px',
    }

    const consutlorio2Style: CSSProperties = {
        width: '100%',
        height: '50vh',
        objectFit: 'cover',
        borderTopLeftRadius: '20px',
    }

    const divStyle: CSSProperties = {
        backgroundColor: 'black',
    }

    return (
        <div id="main-content" style={divStyle}>
            <Container>
                <Row>
                    <Col>
                        <Card className="my-5" style={{ backgroundColor: 'black', borderColor: 'orange', borderWidth: '1px', borderStyle: 'solid' }}>
                            <Card.Body>
                                <Card.Title style={{ color: 'orange' }}>
                                    <h2 className="display-4">¿Quienes somos?</h2>
                                </Card.Title>
                                <Card.Text className="h4 text-justify" style={{ color: 'white' }}>
                                    Somos un grupo de prefecionales de la ortodoncia especializados en ortodoncia lingual.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src={image_1} alt="consultorio_1" className="img-fluid my-5" style={consutlorio1Style} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={carousel_2} alt="consultorio_1" className="img-fluid my-5" style={consutlorio2Style} />
                    </Col>
                    <Col>
                        <Card className="my-5" style={{ backgroundColor: 'black', borderColor: 'orange', borderWidth: '1px', borderStyle: 'solid' }}>
                            <Card.Body>
                                <Card.Title style={{ color: 'orange' }}>
                                    <h2 className="display-4">¿Qué hacemos?</h2>
                                </Card.Title>
                                <Card.Text className="h4 text-justify" style={{ color: 'white' }}>
                                    En Ortodoncia Lingual Buenos Aires nos dedicamos a la corrección de la posición de los dientes mediante la técnica de ortodoncia lingual.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Cards;