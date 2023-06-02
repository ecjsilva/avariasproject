import "./LoadingStyle.css";

import loadingsvg from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="loader_container">
      <img className="loading" src={loadingsvg} alt="Loading" />
    </div>
  );
}
