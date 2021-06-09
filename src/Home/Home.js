import React from 'react';
import AboutContent from './AboutContent';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Pricing from './Pricing';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <AboutContent></AboutContent>
            <Pricing></Pricing>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;