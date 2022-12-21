import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();

  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby authentic locavore venmo tousled, irony retro waistcoat
              glossier pop-up banh mi godard brunch. Tbh butcher man bun,
              meggings offal four dollar toast shoreditch Brooklyn gluten-free
              farm-to-table. Everyday carry selvage hashtag meggings tote bag
              blog. Freegan vaporware selvage pug tofu. Cliche craft beer
              mustache schlitz. Messenger bag distillery keffiyeh disrupt la
              croix thundercats tattooed. Food truck direct trade swag, tattooed
              affogato taxidermy vaporware godard fanny pack pork belly
              asymmetrical.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
