import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./config/particle-config";


export default function ParticlesBackground(){
    return(
<Particles params={ParticleConfig}></Particles>
    );
} 
