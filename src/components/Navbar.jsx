import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-links">
            <NavLink to="/" className="nav-link logo">
              Feven Haddis
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/consulting" className="nav-link">
              Consulting
            </NavLink>

            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/writing" className="nav-link">
              Writing
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--secondary-100);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
    align-items: center;
  }
  .nav-link {
    color: var(--secondary-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
export default Navbar;
