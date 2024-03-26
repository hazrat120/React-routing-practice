import { Link, useLocation, useParams } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 400)}</p>
      <Link to="/blogs">Go Blogs</Link>
    </div>
  );
};

export default Blog;
