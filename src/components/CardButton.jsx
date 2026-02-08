import React from 'react'

function CardButton({children}) {

  return (
    <button style={{backgroundColor:helper(children),borderRadius:"5px",width:"85px",height:"33px",border:"none",color:"white"}}>{children}</button>
  )
}

function helper(child){
    if(child.toLowerCase()==='simple')
        return '#E17654'
    if(child.toLowerCase()==='rugged')
        return '#115E59'
     if(child.toLowerCase()==='luxury')
        return '#161616'
        
}
export default CardButton