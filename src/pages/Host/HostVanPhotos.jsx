import React from 'react'
import "../../styles/HostVanDetailChildren.css";
import { useOutletContext } from "react-router";
function HostVanPhotos() {
    const van = useOutletContext();
  return (
   <div className='van-photo-container'>
    <img src={van.imageUrl} alt="photo" />
   </div>
  )
}

export default HostVanPhotos