import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

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

  //const skills = ['Python', "Terraform", 'Java', "AWS, Azure", 'SQL & Oracle', "Dynatrace, Gaia", 'HTML & CSS', "Jules, Jenkins, Groovy", 'Javascript, React.js', "Grafana", "Node.js, Typescript", "Node.js, Typescript"];
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
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! My name is Aya!</p>

            <p>
              I love participating in hackathons – I even traveled all the way to one in Denmark. We
              earned <a href="https://bit.ly/bucs-a182">3rd place</a> based on the latency and the
              number of data points! I shared my experience{' '}
              <a href="https://www.linkedin.com/posts/ayazhankad_auhack-hackathon-incommodities-activity-7045769900644040704-bs-z?utm_source=share&utm_medium=member_desktop">
                here
              </a>
              .
            </p>
            <p>
              I enjoy building projects on my own for fun! While learning React.js, I created{' '}
              <a href="https://github.com/ayazhankadessova/trip-generator-with-OpenAI">TripGenie</a>
              , a personalized itinerary generator with the OpenAI API.
            </p>
            <p>
              Recently, I am also interested in Cloud Infrastructure Management, Monitoring, and
              Observability, exploring automation tools like Terraform in AWS, Azure, and other
              providers. I created a{' '}
              <a href="https://github.com/ayazhankadessova/dev-environment-tf-azure">
                Development environment in Azure{' '}
              </a>{' '}
              that I can SSH into to have my re-deployable environment and uploaded it with Docker
              for future projects.
            </p>
            <p>
              I am also passionate about sharing my knowledge. My favorite event organized as a
              Women Techmakers Ambassador at Google is a{' '}
              <a href="https://www.linkedin.com/posts/ayazhankad_today-i-was-the-speaker-for-the-hands-on-activity-7038903549317050368-JdYM?utm_source=share&utm_medium=member_desktop">
                Web scraping workshop at HKBU
              </a>
              with 100 participants. Also, I have mentored students in CS & Data Science at HKBU and
              Qwasar Silicon Valley Tech Talents Training.
            </p>
            <p>
              To explore my leadership and community-building skills even more, I am a Google
              Student Developer Club Lead at HKBU this year. I'm so excited to have a tech community
              on my campus!
            </p>

            <p>Here are my favorite technologies for building amazing apps:</p>
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
  );
};

export default About;
