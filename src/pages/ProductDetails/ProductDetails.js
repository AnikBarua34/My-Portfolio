import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from './../Header/Header';
import { Container,Row} from 'react-bootstrap';

const ProductDetails = () => {
    // for AOS
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease',
        });
    })
    const {serviceId}=useParams();
    const [singleServices,setSingleServices]=useState([]);

    // This state is for Showing Details after click 
    const [singleService,setSingleService]=useState({});

    // This is for load data 
    useEffect(()=>{
        fetch('/projocts.JSON')
        .then(res=> res.json())
        .then(data=> setSingleServices(data))

    },[])
// This is will work when data loaded
   useEffect(()=>{
       const foundService = singleServices.find(service=> service.id == serviceId)
       setSingleService(foundService);
       console.log(foundService)
   },[singleServices])
    return (
        <div>
            <div>
            <Header></Header>
            </div>
            

            <div className="mt-5 pt-3" >
                <div data-aos="zoom-in" className="fw-bold bg-success m-3 text-dark rounded shadow border p-2">
                    <h2> {singleService?.name} <hr /> </h2>
                    <h6>{singleService?.description1}</h6> <br />
                    <h6>{singleService?.description2}</h6> <br />
                    <h6>{singleService?.description3}</h6><br />
                    <h6>{singleService?.description4}</h6><br />
                    <h6>{singleService?.description5}</h6><br />
                    <a href={singleService?.liveLink} target="_blank" rel="noreferrer"><button className="btn btn-warning rounded-pill  fw-bold resume">Live Website</button> </a><a href={singleService?.githubClientLink} target="_blank" rel="noreferrer"><button className="btn btn-info rounded-pill  fw-bold text-dark">Github Client</button> </a><a href={singleService?.githubServerLink} target="_blank" rel="noreferrer"><button className="btn btn-dark rounded-pill  fw-bold">Github Server</button> </a>
                </div>
            
            <Container className="mb-5 pb-3">
            
                <Row xs={1} sm={1} md={2} lg={3} >
                        <Col md={3} lg={3}>
                    <div data-aos="fade-up">
                        <Card className="card-body bg-dark" border="warning"> 
                        <h3 className="fw-bold bg-secondary text-dark rounded shadow border p-2">Full Page View</h3> <img className="border shadow rounded" style={{width:240}} src={singleService?.img4} alt="" />
                        </Card>
                    </div>
                    </Col>

                        <Col md={9} lg={9}>
                        <Row  xs={12} sm={12} md={12} lg={12} >
                        <Col>
 <div data-aos="fade-up">
 <Card className="card-body bg-dark" border="warning"> 
 <h3 className="fw-bold bg-secondary text-dark rounded p-2 shadow border img-fluid" >PART_1</h3><img className="border shadow rounded" style={{width:300, height:200}}  src={singleService?.img2} alt="" />
 </Card>
 </div>
 </Col>

 <Col>
 <div data-aos="fade-up">
 <Card className="card-body bg-dark" border="warning"> 
 <h3 className="fw-bold bg-secondary text-dark rounded p-2 shadow border img-fluid">PART_2</h3> <img className="border shadow rounded" style={{width:300, height:200}}   src={singleService?.img3} alt="" />
 </Card>
 </div>
 </Col>

 <Col>
 <div data-aos="fade-up">
 <Card className="card-body bg-dark" border="warning"> 
 <h3 className="fw-bold bg-secondary text-dark rounded p-2 shadow border img-fluid">PART_3</h3> <img className="border shadow rounded" style={{width:300, height:200}}  src={singleService?.img1} alt="" />
 </Card>
 </div>
 </Col>
 </Row> 
                    
                   
                       
                    </Col>

                    </Row>
            </Container>
        </div>
            
        </div>
    );
};

export default ProductDetails;
 