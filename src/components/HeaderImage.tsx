import { CSSProperties } from "react";
import carousel_1 from '../assets/carousel_1.jpg';
import Container from 'react-bootstrap/Container';

const HeaderImage = () => {

    const style: CSSProperties = {
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
        backgroundColor: 'black',
        textAlign: 'center',
        padding: '10 % 5 %',
    };

    return (
        <div className="home-header" style={style}>
            <Container>
                <h1 className="display-2" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Excelencia en Ortodoncia Lingual</h1>
                <div className="my-4"></div>
                <p className='h3' style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>La verdadera ortodoncia invisible</p>
            </Container>
        </div>
    )
};

export default HeaderImage;