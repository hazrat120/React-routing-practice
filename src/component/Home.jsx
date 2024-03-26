import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link to="/about">Next</Link>
    </div>
  );
};

export default Home;
