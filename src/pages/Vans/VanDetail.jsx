import React from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import "../../styles/VanDetail.css";
import CardButton from "../../components/CardButton";
import { getVan } from "../../api";
function VanDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [van, setVan] = React.useState(null);
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
  const search = location.state?.search || "";
  const buttonText =
    search !== "" && search !== "?"
      ? ` ${new URLSearchParams(search).get("type")}`
      : "";
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <NavLink to={`..${search}`} relative="path" className="back-link">
            <span>{`<-`}</span>
            {`Back to all${buttonText} vans`}
          </NavLink>
          <div className="vandetail-flex">
            <div className="vandetail-img-container">
              <img src={van.imageUrl} alt="img" />
            </div>
            <CardButton>{van.type}</CardButton>
            <h3>{van.name}</h3>
            <p>
              ${van.price} <span className="day-detail">/day</span>
            </p>
            <p>{van.description}</p>
            <button>Rent this van</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
