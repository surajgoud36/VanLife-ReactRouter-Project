import React from "react";
import "../../styles/Vans.css";
import MiniCard from "../../components/MiniCard";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
function Vans() {
  let [vans, SetVans] = React.useState(null);
  const [seachParams, setSearchParams] = useSearchParams();
  const typeFilter = seachParams.get("type");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    async function loadVans() {
      try {
        setLoading(true);
        const data = await getVans();
        SetVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);
  vans = vans
    ? typeFilter
      ? vans.filter(
          (van) => van.type.toLowerCase() === typeFilter.toLowerCase(),
        )
      : vans
    : null;
  function handleFilterChange(key, value) {
    setSearchParams((prev) => {
      const paramsObject = new URLSearchParams(prev);
      if (value === null) {
        paramsObject.delete(key);
      } else {
        paramsObject.set(key, value);
      }
      return paramsObject;
    });
  }
  if (loading) return <h1>Loading...</h1>;
  if(error){
    return <h1>There was an error: {error.message}</h1>
  }
  return (
    <div className="vans-page">
      <h2>Explore our van options</h2>
      <div className="filter-container">
        <button
          className={`simple ${typeFilter === "simple" ? "selected" : ""}`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="clear-filters"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="van-grid">
        {vans &&
          vans.map((van) => (
            <Link
              to={`${van.id}`}
              key={van.id}
              className="card-link"
              state={{ search: `?${seachParams.toString()}` }}
            >
              <MiniCard
                src={van.imageUrl}
                title={van.name}
                price={van.price}
                type={van.type}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Vans;
