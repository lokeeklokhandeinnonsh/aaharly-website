import React from 'react';
import Hero from '../sections/Hero';
import WhatWeDo from '../sections/WhatWeDo';
import Audience from '../sections/Audience';
import ValueProp from '../sections/ValueProp';
import AppDownload from '../sections/AppDownload';
import Footer from '../sections/Footer';

const Home: React.FC = () => {
    return (
        <div className="app-container">
            <Hero />
            <WhatWeDo />
            <Audience />
            <ValueProp />
            <AppDownload />
            <Footer />
        </div>
    );
};

export default Home;
