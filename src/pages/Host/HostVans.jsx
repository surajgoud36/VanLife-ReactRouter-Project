import React from "react";
import "../../styles/HostVans.css";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";
function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setHostVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="host-vans">
      <h2>Your listed vans</h2>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          hostVans.map((van) => (
            <Link
              to={`${van.id}`}
              key={van.id}
              className="host-van-link-wrapper"
            >
              <div className="host-van-card">
                <div className="host-van-image">
                  <img src={van.imageUrl} alt="image" />
                </div>
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default HostVans;
