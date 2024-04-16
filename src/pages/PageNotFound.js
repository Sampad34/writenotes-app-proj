import Logo from "../assets/images/page-not-found.jpg";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
   useTitle("page not found");

  return (
    <section className="pageNotFound">
      <p>404-page not found</p>
      <img src={Logo} alt="" />
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </section>
  )
}


