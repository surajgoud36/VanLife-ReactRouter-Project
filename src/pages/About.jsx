import React from "react";
import "../styles/About.css";
import ab from "../assets/aboutImage.png";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate()
  return (
    <div className="about">
      <div className="image-container">
        <img src={ab} alt="" />
      </div>
      <div className="des">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="button-container">
          <p>Your Destination is waiting.<br/>Your van is ready.</p>
          
          <button style={{cursor:"pointer"}} onClick={()=>navigate("/vans")}>Explore our vans</button>
        </div>
      </div>
    </div>
  );
}

export default About;
