import React, { useContext, useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import corndog from '../../images/corndog.png';
import drink from '../../images/drink.png';
import food from '../../images/food.png';
import fries from '../../images/fries.png';
import logo from '../../images/logo.png';
import plus from '../../images/plus.png';
import styled from 'styled-components';
import tag from '../../images/tag.png';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <img src={logo} alt="logo" style={{ maxWidth: '50%', margin: '100px 0 100px 0' }} />
          <HeroImageWrapper>
            <img src={food} alt="food" style={{ maxWidth: '80%' }} />
          </HeroImageWrapper>
          <img src={tag} alt="tag" style={{ maxWidth: '80%', margin: '100px 0 100px 0' }} />
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="signup" smooth duration={1000}>
                {cta || 'Is your stomach ready?'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

const HeroImageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
