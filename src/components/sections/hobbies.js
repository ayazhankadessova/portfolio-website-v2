import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHobbiesSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      grid-template-columns: 1fr;
    }
  }
`;

const StyledText = styled.div`
  margin-top: 40px;
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      // mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const Hobbies = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);
  return (
    <section id="hobbies">
      <h2 className="numbered-heading">My Hobbies :)</h2>
      <StyledHobbiesSection>
        <div className="inner">
          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/me.jpg"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>
          <StyledText>
            <div>
              <p>
                Apart from my tech experience, I have a diverse range of hobbies that bring me joy:
                - Outdoor sports: running, swimming, and volleyball, which I played throughout high
                school and university. - Skiing --- I believe that the best ski resort is located in
                Oskemen, Kazakhstan. Additionally, I enjoy going to the gym and prefer to do so with
                friends, making it a fun social activity.
              </p>
              <p>
                - YouTube channel where I share vlogs from special moments in my life, such as my
                first day of university or my solo trip to Europe.
              </p>
              <p>
                - Podcasts and books, particularly ones that explore public policy and social
                issues. One of my all-time favorite books is "Invisible Women" by Caroline Criado
                Perez, which offers a groundbreaking perspective on gender inequality and its impact
                on women's lives. - I am also passionate about participating in hackathons, such as
                Techathon, Cybher, and Swire, which allow me to showcase my skills and collaborate
                with like-minded individuals.
              </p>

              <p>
                {' '}
                Lastly, I love going on coffee hops to explore new cafes and try different blends,
                which is both relaxing and energizing.
              </p>
              <p>*This page is in process...*</p>
            </div>
            <br />
          </StyledText>
        </div>
      </StyledHobbiesSection>{' '}
    </section>
  );
};

export default Hobbies;
