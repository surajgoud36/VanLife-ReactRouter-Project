import React from "react";
import "../../styles/HostVanDetail.css";
import CardButton from "../../components/CardButton";
import HostDetailLayout from "../../components/HostDetailLayout";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getVan } from "../../api";
function HostVanDetail() {
  
  const [van, setVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, [id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }
  return van ? (
    <div className="host-van-detail">
      <NavLink to=".." relative="path" className="back-link">
        <span>{`<-`}</span>
        Back to all vans
      </NavLink>
      <div className="host-van-detail-card">
        <div className="host-van-detail-static">
          <div className="host-van-detail-image">
            <img src={van.imageUrl} alt="image" />
          </div>
          <div className="host-van-detail-info">
            <CardButton>{van.type}</CardButton>
            <h3>{van.name}</h3>
            <p>
              {van.price}
              <span>/day</span>
            </p>
          </div>
        </div>
        <HostDetailLayout />
        <Outlet context={van} />
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}

export default HostVanDetail;
