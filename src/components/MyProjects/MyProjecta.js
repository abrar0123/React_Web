import React from 'react';
import { myProjects } from './dumm';
import { Text } from '../UI/Text';
import ProjectsDetails from './projectsDetails';
import colors from '../../constants/colors';
import { ScrolledList } from '../about/ScrolledList';
import { ServicesCmp } from '../about/ServicesCmp';

export const MyProjects = () => {
  return (
    <div className="frontend">
      {/* <h1>My Latest Projects </h1> */}
      <Text
        ml={15}
        // mt={100}
        mb={40}
        font={60}
        bold
        center
        color={colors.cyanBlue}
        text="What I Offer  "
      />
      <ScrolledList />
      <ServicesCmp />
    </div>
  );
};
