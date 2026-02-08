import React from "react"
import '../../styles/Dashboard.css'
import { BsStarFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"
export default function Dashboard() {
     const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        setLoading(true)
        getHostVans()
            .then(data => setVans(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    function renderVanElements(vans){
        const hostVansEls = vans.map((van)=>(
            <div className="host-van-card">
                <div className="host-van-image">
                  <img src={van.imageUrl} alt="image" />
                </div>
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
                <Link className="link-view" to={`vans/${van.id}`}>View</Link>
              </div>
        ))
        return (
             <div className="host-vans-list">
                {hostVansEls}
             </div>
        )
    }
    if(error){
        return <h1>Error: {error.message}</h1>
    }
    return (
        <div className="dashboard-container">
            <div className="dashboard-income">
                <div className="income-info">
                    <h3>Welcome!</h3>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </div>
            <div className="dashboard-review">
                <h2>Review score</h2>
                 <BsStarFill className="star" />
                 
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </div>
            <div className="dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                {
                    loading && !vans ?
                    <h1>Loading ...</h1>
                    :(
                        <>
                            {renderVanElements(vans)}
                        </>
                    )
                }
            </div>
        </div>
    )
}