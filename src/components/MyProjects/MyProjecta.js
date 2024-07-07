import React from 'react';
import { myProjects } from './dumm';
import { Text } from '../UI/Text';
import ProjectsDetails from './projectsDetails';
import colors from '../../constants/colors';
import { ScrolledList } from '../about/ScrolledList';

export const MyProjects = () => {
  const techs = [
    { id: 0, name: 'All', title: 'mamm' },
    { id: 1, name: 'React', title: 'mamm' },
    { id: 4, name: 'React Native', title: 'mamm' },
    { id: 2, name: 'Next', title: 'mamm' },
    { id: 3, name: 'Full Stack', title: 'mamm' },
    { id: 5, name: 'Html CSS', title: 'mamm' },
  ];
  return (
    <div className="frontend">
      {/* <h1>My Latest Projects </h1> */}
      <Text
        ml={15}
        // mt={100}
        mb={30}
        font={60}
        bold
        center
        color={colors.cyanBlue}
        text="My Latest Projects "
      />
      <ScrolledList />
      <ProjectsDetails myProjects={myProjects} techs={techs} />
    </div>
  );
};
