import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";

import tile1 from "../images/tile-1.jpg";
import tile2 from "../images/tile-2.jpg";
import tile3 from "../images/tile-3.jpg";
import tile4 from "../images/tile-4.jpg";
import tile5 from "../images/tile-5.jpg";

const About = () => {
  return (
    <Wrapper>
      <div className="about">
        <div className="title">
          <SectionTitle text="About Feven" />
        </div>
        <div>
          <img
            className="profile-img"
            src="https://media.licdn.com/dms/image/v2/C5603AQGBBfs1CmS9nw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516869497447?e=1756944000&v=beta&t=BTeZ80iB6z_xDUlwEGFDN4Rl38scc9LO0kZrIW5MXWc"
            alt="feven haddis profile photo"
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem
          deleniti recusandae facere nulla dignissimos ut sunt voluptatibus
          repellendus nisi! Esse neque hic ipsum asperiores!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          impedit beatae sint delectus odio debitis. Dolore vitae iste eligendi
          voluptatem doloremque aspernatur eius exercitationem iusto ullam!
          Exercitationem repellat error quisquam ea debitis nesciunt in,
          reiciendis non nemo veritatis pariatur molestiae at laudantium saepe
          delectus sunt neque impedit dolorum adipisci quos ducimus similique
          odit quia. Laudantium cum, commodi nihil expedita deserunt quas, nobis
          hic quis minima iste, voluptates aut esse consectetur rem! Aliquam
          repudiandae qui explicabo rerum distinctio ut nobis, labore iure
          magnam adipisci excepturi veniam, delectus maxime officia ducimus non
          error eveniet reiciendis laboriosam voluptas!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          incidunt placeat, ipsam atque dolorum eligendi animi inventore veniam!
          Facere, unde!
        </p>
        <section className="tiles">
          <div className="tiles-center">
            <article className="tile-1">
              <img src={tile1} alt="" />
            </article>
            <article className="tile-2">
              <img src={tile2} alt="" />
            </article>
            <article className="tile-3">
              <img src={tile3} alt="" />
            </article>
            <article className="tile-4">
              <img src={tile4} alt="" />
            </article>
            <article className="tile-5">
              <img src={tile5} alt="" />
            </article>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .about {
    margin: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .profile-img {
    border-radius: 10%;
    margin-bottom: 1.5rem;
  }
 .tiles {
  padding: 4rem, 0;
  
 }
.tiles img {
  display: none;
  height: 20rem;
  border-radius: var(--borderRadius);
  object-fit: cover;
}

.tiles-center {
  width: 90vw;
  max-width: 70em;
  margin: 2rem auto;
  display: grid;
  grid-row-gap: 1rem;
}
@media (min-width: 768px) {
  .tiles img {
  display: grid;
}
  .tiles-center {
    grid-template-columns: repeat(2, 1fr);
     grid-column-gap: 1rem;
  }
  .tiles img {
    height: 100%;
    width: 100%;
  }
}


@media (min-width: 1170px) {
  .tiles-center {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 200px);
   
    
   
    grid-template-areas:
      "a a a c c"
      "a a a c c"
      "d d d d b"
      "d d d d e"
      "d d d d e";
  }
  .tiles img {
    width: 100%;
   
  }
  .tile-1 {
    grid-area: a;
  }
  .tile-2 {
    grid-area: b;
  }
  .tile-3 {
    grid-area: c;
  }
  .tile-4 {
    grid-area: d;
  }
   .tile-5 {
    grid-area: e;
  }
`;
export default About;
