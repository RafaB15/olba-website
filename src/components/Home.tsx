import React from 'react';

import HeaderImage from './HeaderImage';
import Cards from './Cards';

import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <HeaderImage />
            <Cards />

            <div>
                <h1 className="display-4 text-center my-5">Preguntas frecuentes</h1>
            </div>
        </div>
    );
};

export default Home;