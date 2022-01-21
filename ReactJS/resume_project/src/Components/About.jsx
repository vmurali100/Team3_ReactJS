import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';


export const About = () => {
  const [about,setAbout]=useState({})
  useEffect(()=>{
    axios.get("http://localhost:3000/about").then(({data})=>{
      console.log(data);
   setAbout(data)
    })
  })
  return <div>
    
          <section className="py-5 bg-light" id="about">
      <div className="container py-5">
        <header className="mb-5">
        <p className="fw-bold text-primary text-uppercase letter-spacing-3">{about.title}</p>
          <h2 className="h3 lined">To boost your creative projects</h2>
        </header>
        <p className="lead text-muted">Lorem ipsum dolor sit amet, <strong className="text-dark">consetetur sadipscing elitr, </strong> sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
        <p className="text-muted">{about.p1} </p>
        <p className="text-muted mb-0">{about.p2}</p>
      </div>
    </section>

  </div>;
};
