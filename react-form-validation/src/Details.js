import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  return (
    <div className="card">
      <h2>Submitted Details</h2>
      {Object.entries(state || {}).map(([key, value]) => (
        <p key={key}><b>{key}:</b> {value}</p>
      ))}
    </div>
  );
}

export default Details;
