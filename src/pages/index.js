import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import App from '../components/App';
import { Helmet } from 'react-helmet';
import React from 'react';
import { headData } from '../mock/data';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Popadog - Coming Soon!'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Popadog - Coming Soon'} />
      </Helmet>
      <App />
    </>
  );
};
