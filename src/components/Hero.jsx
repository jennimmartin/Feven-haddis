import styled from "styled-components";
import img from "../images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero-center">
          <div className="hero-text">
            <h1>Hey, I'm Feven</h1>
            <p>
              I'm passionate about empowering the lives of women in Ethiopia
            </p>
          </div>
          <Link to="/about">
            <button className="hero-btn">Find Out More</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero {
    min-height: calc(100vh - 5rem);
    background: var(--primary-500);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-text {
  color: var(--white);  
  animation: slideFromTop 5s ease-in-out 1;
}
.hero-btn {
  background: transparent;
  border: 1px solid var(--white);
  padding: 0.75rem 1.25rem;
  text-transform: uppercase;
  color: var(--white);
  letter-spacing: 2px;
  animation: slideFromBottom 5s ease-in-out 1;
  cursor: pointer;
}
  @media (min-width: 768px) {
    .hero {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.9)
      ),
      url(${img}) center/cover no-repeat;
    }
    @keyframes slideFromTop {
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFromBottom {
  0% {
    opacity: 0;
    transform: translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default Hero;
