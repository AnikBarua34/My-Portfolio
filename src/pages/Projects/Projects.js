import React, { useEffect, useState } from 'react';
import { Container,Row} from 'react-bootstrap';
import './Projects.css';
import Project from '../Project/Project';

const Projects = () => {
    const [projects,setProjects]=useState([]);

    useEffect(()=>{
fetch("./projocts.JSON")
.then(res=>res.json())
.then(data=>setProjects(data))
    },[])
    return (
        <div id="projects">
            <h2 className="text-light bg-dark rounded-pill fw-bold mt-3 p-3">MY RECENT PROJECTS</h2>

            <Container className="mb-5 pb-3">
            <Row xs={1} sm={1} md={2} lg={3} className="g-3 m-3 rounded">
               {
                   projects.map(data=> <Project
                   key={data.id} data={data}
                   ></Project> )
               }
               </Row>
            </Container>
            
        </div>
    );
};

export default Projects;