import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tacking</span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            nesciunt quam autem commodi vero sit modi suscipit eveniet beatae
            assumenda? Dolorem quo at, in exercitationem aspernatur facere id
            voluptatibus repudiandae.
          </p>
          <Link to="/register" className="btn bnt-hero">
            SingIn/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
