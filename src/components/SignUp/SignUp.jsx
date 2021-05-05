import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

const SignUp = () => {
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
    <section id="signup">
      <Container>
        <Title title="Sign up for updates" />
        <Row className="signup-wrapper">
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="signup-wrapper__info">
                <p className="signup-wrapper__info-text">
                  We're coming to Stratford soon, tell us your email and you might get a chance to
                  win a months free worth of corndogs.
                </p>
              </div>
            </Fade>
          </Col>
          <Col md={12} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="signup-wrapper__image">
                <div className="container__item">
                  <form className="form">
                    <input type="email" className="form__field" placeholder="Your E-Mail Address" />
                    <button type="button" className="btn btn--primary btn--inside uppercase">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
