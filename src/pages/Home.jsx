import React from "react";
import "../styles/Home.css";
import bgImge from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <div
      className="home"
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.4),  
      rgba(0, 0, 0, 0.4)
    ),url(${bgImge})`,
      }}
    >
      <div className="description">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button onClick={()=>navigate("vans")}>Find your van</button>
      </div>
    </div>
  );
}

export default Home;
