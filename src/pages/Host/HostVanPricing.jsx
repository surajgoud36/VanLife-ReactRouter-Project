import React from 'react'
import "../../styles/HostVanDetailChildren.css";
import { useOutletContext } from "react-router";
function HostVanPricing() {
    const van = useOutletContext();
  return (
   <p className='host-van-pricing'>${van.price}<span>/day</span></p>
  )
}

export default HostVanPricing