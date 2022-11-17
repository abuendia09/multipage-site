import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact use here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        suscipit, nobis molestias et ea ducimus mollitia culpa, voluptates
        optio, natus quos dolorem assumenda dolores eligendi vero in consectetur
        magni vitae!
      </p>
    </div>
  );
}
