import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Project = ({data}) => {
    const {id,name,cover,liveLink,description}=data;
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:'ease',
        });
    })

    return (
        <div data-aos="zoom-in">
            
                    <Col>
                    <Card className="card-body bg-dark" border="warning"> 
                    <Card.Img className="mx-auto img" style={{width:"85%",height:200}} variant="top" src={cover} />
                    <Card.Body>
                    <Card.Title className="text-primary mt-2 fw-bold"> {name} <hr /></Card.Title>
                    <Card.Text > <Link to={`/ProductDetails/${id}`}> <button className="btn btn-primary">More Details</button> </Link> <a className="text-danger fw-bold" href={liveLink} target="_blank" rel="noreferrer"><button className="btn btn-warning">LIVE SITE</button></a> </Card.Text>
                    <Card.Text className="text-info"> {description} </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    
        </div>
    );
};

export default Project;