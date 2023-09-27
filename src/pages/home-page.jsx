import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>home-page</h1>
      <Link to="/kandidat">
        <button className="bg-blue-800 text-white border rounded-md px-3">
          Untuk Kandidat
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
