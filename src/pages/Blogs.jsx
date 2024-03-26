import { useState } from "react";
import blogsData from "./../data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs] = useState(blogsData);

  const truncateString = (str = "", num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>This is Blogs page</h1>
      {blogs.map((blog) => {
        const { id, title, body } = blog;

        return (
          <article key={id}>
            <h2>{`Title: ${title}`}</h2>
            <p>{truncateString(body, 100)}</p>
            <Link to={title} state={{ id, title, body }}>
              Learnmore
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Blogs;
