import React from 'react';
import { useState } from 'react';
import LayoutPage from '../components/LayoutCmp/LayoutPage';
import Headersection from '../components/headersection/headersection';

const HomePage = () => {
  return (
    <LayoutPage>
      <Headersection />
    </LayoutPage>
  );
};

export default HomePage;
