import React from 'react';
import { Col, Container, Row,Image } from 'react-bootstrap';
import './Information.css';
import mypic from '../../images/mypic.png';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import { GoMarkGithub } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';


const Information = () => {
    return (
        <div id="information">
           
            <Container className=" text-light mt-5 pt-3 p-3 bg-dark rounded-3 shadow-lg">
                
            <Row className="mt-5 mb-5">
                    <Col className="mt-5 " sm={2} md={2} lg={6}> 
                    <h2>Hello,This is <span className="text-info">ANIK BARUA TURJOY</span> </h2> <br /> 
                    <div className="typeWriter mb-4">
                    <Typewriter className="text-info"
                    options={{
                        strings: [' I am a Junior Web Developer.', 'I have Skills in MERN stack','I want to learn new technology'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </div>
                    <a href="https://drive.google.com/file/d/1DkSl4cNoqWNiEK4heVLHZOC99tzB7iBx/view?usp=sharing" target="_blank" rel="noreferrer"> <button className="btn btn-warning fw-bold resume">MY RESUME</button> </a>
                    <div className="d-flex justify-content-center mt-2"><a className="m-2" href="https://facebook.com/turjoy2" target="_blank" rel="noreferrer"> <h1><FaFacebook/></h1> </a> <a className="m-2" href="https://github.com/AnikBarua34" target="_blank" rel="noreferrer"> <h1><GoMarkGithub/></h1> </a><a className="m-2" href="https://www.linkedin.com/in/anik-barua-097564160/" target="_blank" rel="noreferrer"> <h1><BsLinkedin/></h1> </a></div>
                    </Col>
                    <Col sm={2} md={2} lg={6}> 
                    <Image className="ms-3" style={{width:300}} src={mypic} roundedCircle />
                    </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Information;