import styled from "styled-components";

const SectionTitle = ({ text }) => {
  return (
    <Wrapper>
      <div>
        <h2>{text}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export default SectionTitle;
