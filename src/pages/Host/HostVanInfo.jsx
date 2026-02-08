import React from "react";
import "../../styles/HostVanDetailChildren.css";
import { useOutletContext } from "react-router";
function HostVanInfo() {
  const van = useOutletContext();
  return van?(
    <div className="host-van-child-info">
      <p>
        <span style={{ fontWeight: "bold" }}>Name: </span>
        {van.name}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Category: </span>
        {van.type}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Description: </span>
        {van.description}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Visibility: </span>
        Public
      </p>
    </div>
  ):null
}

export default HostVanInfo;
