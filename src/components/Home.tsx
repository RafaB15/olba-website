import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import image_1 from '../assets/image_1.png';
import '../styles/Home.css';
import { CSSProperties } from 'react'; // Import CSSProperties

const Home: React.FC = () => {

    const divContainerStyle: CSSProperties = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${carousel_1})`, // Example image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '65vh', // Adjust height as needed
        color: 'white', // Optional: For better text visibility
        display: 'flex', // Make it a flex container
        justifyContent: 'center', // Center horizontally, remove if not needed
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack children vertically
    };

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

    const divMainContentStyle: CSSProperties = {
        backgroundColor: 'black',
    }

    return (
        <div>
            <div className="home-header" style={divContainerStyle}>
                <Container>
                    <h1 className="display-2" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Excelencia en Ortodoncia Lingual</h1>
                    <div className="my-4"></div>
                    <p className='h3' style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>La verdadera ortodoncia invisible</p>
                </Container>
            </div>
            <div id="main-content" style={divMainContentStyle}>
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
        </div>
    );
};

export default Home;