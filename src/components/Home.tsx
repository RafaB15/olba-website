import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Home.css';

const Home: React.FC = () => {
    const handleScroll = () => {
        const element = document.getElementById('main-content');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="home-header">
                <Container>
                    <h1 className="display-2" style={{ color: 'white' }}>Excelencia en Ortodoncia Lingual</h1>
                    <div className="my-4"></div>
                    <p className='h3' style={{ color: 'white' }}>La verdadera ortodoncia invisible</p>
                    <div className="arrow-down" onClick={handleScroll}></div>
                </Container>
            </div>
            <div id="main-content">
                {/* Add the rest of your page content here */}
            </div>
        </div>
    );
};

export default Home;