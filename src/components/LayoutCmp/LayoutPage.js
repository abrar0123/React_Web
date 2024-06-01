import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Header1 from '../header/header1';

const LayoutPage = ({ children }) => {
  return (
    <React.Fragment>
      <Header1 />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default LayoutPage;
