import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import { media, publicFile } from "../utilities";
import { Link } from "./Link";
import { isDebuggingOn } from "../config";

const Bar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  ${media.tablet`
    padding: 2em 5em;
  `}
  ${media.mobile`
    flex-direction: column;
    svg{
      font-size: 18px;
    }
    img{
      margin-bottom: 16px;
    } 
  `}
`;

const Logo = styled.img`
  width: 120px;
  max-height: 90px;
  transition: opacity 0.1s ease-in-out;
  ${media.tablet`
    width: 150px;
  `}
  &:hover {
    opacity: 0.9;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
      color: var(--primary-color);
    }
  }
`;

const Navbar = ({ activeRoute, location }) => {
  const isMobile = window.innerWidth < 425;
  const isOnboarding = location.pathname === "/welcome";
  const myCV = "DESIGNS";
  const editProfile = !isMobile ? (
    "EDIT INFORMATION"
  ) : (
    <FontAwesomeIcon icon={faUserCircle} />
  );
  const debuggingLink = isDebuggingOn && (
    <Link to="/debug/plain">
      <Button size="tiny" color="black" circular>
        <span role="img" aria-label="paint palette">
          🎨
        </span>{" "}
        Design
      </Button>
    </Link>
  );
  return (
    <Bar>
      <Link to="/">
        <Logo src={publicFile("img/logo.png")} />
      </Link>
      {!isOnboarding && (
        <NavLinks>
          {debuggingLink}
          <Link to="/" isActive={activeRoute === "/"}>
            {myCV}
          </Link>
          <Link to="/profile/edit" isActive={activeRoute === "/profile/edit"}>
            {editProfile}
          </Link>
        </NavLinks>
      )}
    </Bar>
  );
};

const mapStateToProps = (state) => ({
  activeRoute: state.router.location.pathname,
});

Navbar.propTypes = {
  activeRoute: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withRouter(Navbar));
