import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  margin-left: 10px;
  max-width: 900px;
  padding-top: 10px;
  padding-bottom: 10px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      grid-template-columns: 1fr;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '❖';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
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

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const webSkills = [
    'Python',
    'Java',
    'SQL & Oracle',
    'HTML & CSS & Javascript',
    'React.js',
    'Node.js, Typescript',
  ];
  const otherSkills = [
    'Terraform',
    'AWS, Azure',
    'Dynatrace',
    'Jules, Jenkins, Groovy',
    'Grafana',
    'Gaia',
  ];

  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      <StyledAboutSection ref={revealContainer}>
        <div className="inner">
          <StyledText>
            <div>
              <p>Hello! My name is Aya!</p>

              <p>
                <b> I love participating in Hackathons </b> – I even traveled all the way to one in
                Denmark. We earned <a href="https://bit.ly/bucs-a182">3rd place</a> based on the
                latency and the number of data points! I shared my experience{' '}
                <a href="https://www.linkedin.com/posts/ayazhankad_auhack-hackathon-incommodities-activity-7045769900644040704-bs-z?utm_source=share&utm_medium=member_desktop">
                  here
                </a>
                .
              </p>
              <p>
                I enjoy <b>building projects on my own for fun!</b> While learning React.js, I
                created{' '}
                <a href="https://github.com/ayazhankadessova/trip-generator-with-OpenAI">
                  TripGenie
                </a>
                , a personalized itinerary generator with the OpenAI API.
              </p>
              <p>
                Recently, I am also interested in{' '}
                <b>Cloud Infrastructure Management, Monitoring, and Observability</b>, exploring
                automation tools like <b>Terraform in AWS, Azure, and other providers</b>. I created
                a{' '}
                <a href="https://github.com/ayazhankadessova/dev-environment-tf-azure">
                  Development environment in Azure{' '}
                </a>{' '}
                that I can SSH into to have my re-deployable environment and uploaded it with Docker
                for future projects.
              </p>
              <p>
                I am also passionate about <b>sharing my knowledge</b>. My favorite event organized
                as a Women Techmakers Ambassador at Google is a{' '}
                <a href="https://www.linkedin.com/posts/ayazhankad_today-i-was-the-speaker-for-the-hands-on-activity-7038903549317050368-JdYM?utm_source=share&utm_medium=member_desktop">
                  Web Scraping Workshop
                </a>{' '}
                with 100 participants from both non-CS/CS background. Also, I have <b>mentored</b> 6
                students in CS & 30 in Data Science at HKBU and{' '}
                <a href="https://www.google.com/search?client=safari&rls=en&q=Qwasar+Silicon+Valley+Tech+Talents++++++++++++++++Trainin&ie=UTF-8&oe=UTF-8">
                  Qwasar Silicon Valley Tech Talents Training{' '}
                </a>{' '}
                , respectively.
              </p>
              <p>
                To explore my <b>leadership</b> and <b>community-building skills</b> even more, I am
                a <b>Google Student Developer Club Lead at HKBU</b> this year. I'm so excited to
                have a tech community on my campus!
              </p>

              <p>Here are my favorite technologies:</p>
            </div>
            <br />
            <h4 className="skills-list-without-dots">Frontend/Backend development:</h4>
            <ul className="skills-list">
              {webSkills && webSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>

            <br />
            <h4 className="skills-list-without-dots">SRE/Cloud/Others:</h4>
            <ul className="skills-list">
              {otherSkills && otherSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>

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
        </div>
      </StyledAboutSection>
    </section>
  );
};

export default About;
