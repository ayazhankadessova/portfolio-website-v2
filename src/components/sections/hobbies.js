import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledHobbiesSection = styled.section`
  max-width: 900px;

  margin-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  .inner {
    display: grid;
    grid-template-columns: 1.75fr 3.25fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      grid-template-columns: 1fr;
    }
  }
`;

const StyledText = styled.div`
  margin-top: 40px;

  .project-links {
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--dark-slate);

    &:hover,
    &:focus {
      color: var(--green);
      text-decoration: underline;
    }

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 5px 5px 12px 5px;

      &.external {
        svg {
          width: 22px;
          height: 20px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
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
      <StyledHobbiesSection ref={revealContainer}>
        <div className="inner">
          <div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/hobbies1.jpg"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Headshot"
                />
              </div>
              <br />
              <br />
            </StyledPic>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/hobbies2.jpg"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Headshot"
                />
              </div>
              <br />
            </StyledPic>
          </div>
          <div>
            <StyledText>
              <div>
                <p>
                  Apart from my tech experience, I have a diverse range of hobbies that bring me
                  joy:
                </p>
                <div className="project-links">
                  <a href="https://www.youtube.com/channel/UC9SnJoAITiY89RGigVYTw3g">
                    <Icon name="Skiing" />
                  </a>
                  Sports
                </div>
                - I prefer outdoor sports: Running, swimming, and volleyball, which I played
                throughout high school and university.
                <br />- Skiing!!! I believe that the best ski resort is located in Oskemen,
                Kazakhstan.
                <br />- I also enjoy going to the gym and prefer to do so with friends, making it a
                fun bonding activity.
                <p>
                  <div className="project-links">
                    <a href="https://www.youtube.com/channel/UC9SnJoAITiY89RGigVYTw3g">
                      <Icon name="YouTube" />
                    </a>
                    YouTube Channel
                  </div>
                  - I share vlogs from special moments in my life, such as my first day of
                  university or my solo trip to Europe.
                </p>
                <p>
                  <div className="project-links">
                    <a href="https://www.youtube.com/channel/UC9SnJoAITiY89RGigVYTw3g">
                      <Icon name="Bookmark" />
                    </a>
                    Podcasts and books
                  </div>
                  - Particularly ones that explore public policy and social issues. <br />- One of
                  my favorite books is{' '}
                  <a href="https://www.imf.org/en/Publications/fandd/issues/2020/12/book-review-of-invisible-women-by-caroline-criado-perez">
                    "Invisible Women"
                  </a>{' '}
                  by Caroline Criado Perez, which highlights the many (shocking) ways in which
                  women's experiences and contributions are often overlooked or undervalued.
                  {/* The book highlights the many ways in which women's
                experiences and contributions are often overlooked or undervalued. For instance, I
                was surprised to learn that car crash dummies are mostly based on 'middle man'
                averages and that many drugs given to women are almost exclusively trialed on men. */}
                </p>
                <p>
                  <div className="project-links">
                    <a href="https://www.youtube.com/channel/UC9SnJoAITiY89RGigVYTw3g">
                      <Icon name="Codepen" />
                    </a>
                    Hackathons
                  </div>
                  - I am also passionate about participating in hackathons. I participated in 5 this
                  year:{' '}
                  <a href="https://www.linkedin.com/posts/ayazhankad_codeforgood-activity-6981582028399939584--kC8?utm_source=share&utm_medium=member_desktop">
                    Code for Good
                  </a>{' '}
                  by JP Morgan,
                  <a href="https://www.comp.hkbu.edu.hk/v1/?page=std_ach&id=182">Techathon</a> by
                  HKSTP,{' '}
                  <a href="https://www.linkedin.com/posts/ayazhankad_this-week-i-had-a-chance-to-participate-in-activity-7030418307241447424-7Bq1?utm_source=share&utm_medium=member_desktop">
                    CityUHack
                  </a>{' '}
                  by City University of Hong Kong, Swire Hackathon by Swire, Quantori by Nazarbayev
                  University,{' '}
                  <a hre="https://www.comp.hkbu.edu.hk/v1/?page=std_ach&id=181#:~:text=2023%20%7C%20HKBU%20COMP-,Computer%20Science%20Undergraduates%20Win%20the%20Best%20Presentation,the%20Hong%20Kong%20Techathon%202023&text=Team%20NoDea%20won%20the%20Best,Award%20in%20the%20presentation%20ceremony.">
                    AUHack
                  </a>{' '}
                  by Aarhus University.
                  <br />- I love the idea of building something for fun with like-minded people!
                </p>
                <p>
                  <div className="project-links">
                    <a href="https://www.youtube.com/channel/UC9SnJoAITiY89RGigVYTw3g">
                      <Icon name="ItchIo" />
                    </a>
                    All-time fav
                  </div>{' '}
                  Lastly, I love going on coffee hops to explore new cafes and spend some time with
                  myself, reflecting, which is calming and peaceful.
                </p>
                <p>*This page is in process...*</p>
              </div>
              <br />
            </StyledText>
          </div>
        </div>
      </StyledHobbiesSection>{' '}
    </section>
  );
};

export default Hobbies;
