import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404 </h1>
      <p>Oppsss... page under contructor pleasse back to Home</p>
      <Link
        to="/"
        className="bg-blue-900 text-slate-50 px-4 py-3 rounded-lg mt-5 font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
