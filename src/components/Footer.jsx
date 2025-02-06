import styled from "styled-components";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="">
          <a href="https://www.facebook.com/feven.haddis">
            <FaFacebookSquare className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/feven-haddis-4ab3283b/">
            <FaLinkedin className="icon" />
          </a>
        </div>
        <h5 className="">
          <span className="">
            <Link to="#">Legals bits </Link>
          </span>
          | &copy; {new Date().getFullYear()}
          <span> | Built by jennimmartin</span>
        </h5>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
     background: var(--secondary-100);
     place-items: center;
     padding: 1rem;
  }
 
  .icon {
    color: var(--primary-500);
    font-size: 3rem;
    padding-bottom: 1rem;
  }
  .icon:hover {
    color: var(--primary-700);
    transition: var(--transition);
  }

  
  @media (min-width: 768px) {
    .footer {
     );
    }
   
`;
export default Footer;
