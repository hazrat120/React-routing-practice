import { Link, useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  // console.log(location);
  // const [bodyData, setBodyData] = useState("");

  // useEffect(() => {
  //   const bData = blogsData.filter((blog) => blog.title === title);
  //   setBodyData(bData[0].body);
  // }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 400)}</p>
      <Link to="/blogs"> Go Blogs</Link>
    </div>
  );
};

export default Blog;
