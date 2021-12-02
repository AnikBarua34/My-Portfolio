import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row,Image } from 'react-bootstrap';
import './Information.css';
import mypic from '../../images/mypic.png';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import { GoMarkGithub } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';



const Information = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:3000,
            easing:'ease',
        });
    })
    return (
        <div  id="information">
            <Container className="fw-bold mt-5 pt-3 p-3 border  rounded-3 shadow-lg">
                
            <Row className="mt-5 mb-5">
                    <Col className="mt-5 " sm={2} md={2} lg={6}> 
                    <div data-aos="zoom-in">
                    <h2 className="fw-bold text-light  bg-dark rounded">Hello,This is <span className="ms-1 p-3 fw-bold text-warning bg-dark rounded" data-aos="fade-up">ANIK BARUA</span> </h2> <br /> 
                    
                    <div className="typeWriter mb-4 shadow-lg">
                    <Typewriter
                    options={{
                        strings: [' I am a Junior Web Developer.', 'I have Skills in MERN stack','I want to learn new technology'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </div>
                    <a href="https://drive.google.com/file/d/1ZvAsF2DRDudrERUTH2y8v1cU4hg1mZ8o/view?usp=sharing" target="_blank" rel="noreferrer"> <button className="btn btn-warning fw-bold resume">MY RESUME</button> </a>
                    <div data-aos="fade-down" className="d-flex justify-content-center mt-2"><a className="m-2 p-2 rounded shadow fw-bold bg-dark" href="https://facebook.com/turjoy2" target="_blank" rel="noreferrer"> <h1><FaFacebook/></h1> </a> <a className="m-2 text-light rounded shadow  fw-bold bg-dark p-2" href="https://github.com/AnikBarua34" target="_blank" rel="noreferrer"> <h1><GoMarkGithub/></h1> </a><a className="m-2 rounded shadow  p-2 text-info bg-dark" href="https://www.linkedin.com/in/anik-barua-097564160/" target="_blank" rel="noreferrer"> <h1><BsLinkedin/></h1> </a></div>
                    </div>
                    </Col>
                    <Col sm={2} md={2} lg={6}>
                        <div data-aos="flip-down"><Image className="ms-3 shadow-lg" style={{width:250}} src={mypic} roundedCircle />
                        </div> 
                    
                    </Col>
            </Row>
            </Container>
           
        </div>
    );
};

export default Information;