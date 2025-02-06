import SectionTitle from "../components/SectionTitle";
import { PiPhoneCallFill } from "react-icons/pi";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="title">
        <SectionTitle text="Contact" />
        <section className="section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            provident voluptatibus ab nam porro, fuga ducimus iusto alias natus
            id?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            blanditiis.
          </p>

          <a href="mailto:fevicol@live.com">Email me here</a>

          <p>
            Or give me a call -
            <a href="tel:#">
              <PiPhoneCallFill />
            </a>
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    margin: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`;
export default Contact;
