import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Information from '../My_Information/Information';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Information></Information>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;