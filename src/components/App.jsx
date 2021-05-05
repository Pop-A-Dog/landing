import React, { useEffect, useState } from 'react';

import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import { PortfolioProvider } from '../context/context';
import SignUp from './SignUp/SignUp';
import { footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [signUp, setSignUp] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
  //   setHero({ ...heroData });
  //   setSignUp({ ...signUpData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, signUp, footer }}>
      <Hero />
      <SignUp />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
