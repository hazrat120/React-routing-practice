import { useState } from "react";
import blogsData from "../data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs] = useState(blogsData);

  const stringCeparet = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Our Blogs</h1>
      {blogs.map((blog) => {
        const { id, title, body } = blog;

        return (
          <article key={id}>
            <h2>{`Blogs: ${id}`}</h2>
            <h3> {`Title: ${title}`}</h3>
            <p>{stringCeparet(body, 100)}</p>
            <Link to={title} state={{ id, title, body }}>
              Learn More
            </Link>
          </article>
        );
      })}
      <Link to="/faq">Next</Link>
    </div>
  );
};

export default Blogs;
