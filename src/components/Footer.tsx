import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-4 text-center">
            <Container>
                <Row>
                    <Col>&copy; {new Date().getFullYear()} Orthodontics. All Rights Reserved.</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;