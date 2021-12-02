import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Col, Container,Row} from 'react-bootstrap';
import myFullImg from '../../images/full pic.png';
import Typewriter from 'typewriter-effect';
import './About.css';

const AboutMe = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease',
        });
    })
    return (

        <div>
            <div id="aboutMe">
            <Container className="mb-5 pb-3">
                
                <Row xs={1} sm={1} md={2} lg={2}>
                    <Col>
                    <div data-aos="flip-up">
                    <img className="shadow rounded" style={{width:300}} src={myFullImg} alt="" />
                    </div>
                    
                    </Col>

                    <Col>
                        <div data-aos="flip-down"><h2 className="bg-dark fw-bold text-info p-3 rounded">ABOUT ME <hr /></h2></div>
                        
                        <div data-aos="slide-down">
                        <Card className="card-body bg-dark mt-5" border="warning"> 
                        <Card.Body className="card-body">
                    <Card.Title className="text-primary  fw-bold"> I am Anik Barua Turjoy</Card.Title>
                    
                    <Card.Text className="text-info">
                    <div className="typeWriter">
                    <Typewriter
                    options={{
                        strings: ['I want to be a great Proggramer.', 'I am very Friendly','I am very sincere with my work'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </div>
                    <h5>I am studying in the CSE Department at Southern University of Bangladesh. My hobby is playing Video Game,Create new technology. Also i like to play with new technologies.I want to learn new thing.</h5>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                        </div>
                        
                      
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default AboutMe;