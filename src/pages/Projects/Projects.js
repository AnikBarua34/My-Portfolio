import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.jpg';
import project3 from '../../images/project3.png';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects">
            <h2 className="text-light bg-dark rounded-pill fw-bold mt-3 p-3">MY RECENT PROJECTS</h2>

            <Container className="mb-5 pb-3">
                <Row>
                    <Col sm={1} md={4} lg={4}>
                    
                    <Card className="card-body bg-dark" border="warning"> 
                    <Card.Img className="mx-auto img" style={{width:"85%",height:200}} variant="top" src={project1} />
                    <Card.Body>
                    <Card.Title className="text-primary mt-2 fw-bold">Niche Website<hr /></Card.Title>
                    <Card.Text > <a className="text-danger fw-bold" href="https://crazy-bikers-shop.web.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">LIVE SITE</button></a> </Card.Text>
                    <Card.Text className="text-info">
                    ●React ●JavaScript ●Firebase ●Mongo DB ●Heroku <br />
                    ●Secure Authentication <br />
                    ●No Fake JSON data <br />
                    ●Protected Admin Route + Normal User + User Route</Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={4} lg={4}>
                    
                    <Card className="card-body bg-dark" border="warning"> 
                    <Card.Img className="mx-auto img " style={{width:"85%",height:200}} variant="top" src={project2} />
                    <Card.Body>
                    <Card.Title className="text-primary mt-2 fw-bold">Travelling Website<hr /></Card.Title>
                    <Card.Text > <a className="text-danger fw-bold" href="https://mind-fresher-99961.web.app/" target="_blank" rel="noreferrer"> <button className="btn btn-warning">LIVE SITE</button> </a> </Card.Text>
                    <Card.Text  className="text-info">
                    ●React ●JavaScript ●Firebase ●MongoDB ●Heroku<br />
                    ●Secure Authentication<br />
                    ●No Fake JSON data<br />
                    ●Protected Route Registered User & Unregister User</Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={4} lg={4}>
                    
                    <Card className="card-body bg-dark" border="warning">
                    <Card.Img className="mx-auto img " style={{width:"85%",height:200}} variant="top" src={project3} /> 
                    <Card.Body>
                    <Card.Title className="text-primary mt-2 fw-bold">Parchageing Product<hr /></Card.Title>
                    <Card.Text > <a className="text-danger fw-bold" href="https://mac-book-by-anik.netlify.app/" target="_blank" rel="noreferrer"><button className="btn btn-warning">LIVE SITE</button></a> </Card.Text>
                    <Card.Text className="text-info">
                        ●E-Commerce website<br />
                        ●Users can Choose Options<br />
                        ●Users can Choose Delivery date<br />
                        ●Users have to use right promo code<br />
                        ●Users can apply a Promo code for discount !Happy purchaging.....</Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Projects;