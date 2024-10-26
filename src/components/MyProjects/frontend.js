import React from 'react';
import './frontend.scss';

import ProjectsDetails from './projectsDetails';
import { Text } from '../UI/Text';
import colors from '../../constants/colors';
import { myProjects } from './dumm';

const techs = [
  { id: 0, name: 'All', title: 'mamm' },
  { id: 1, name: 'React', title: 'mamm' },
  { id: 2, name: 'Next', title: 'mamm' },
  { id: 3, name: 'Full Stack', title: 'mamm' },
  { id: 4, name: 'React Native', title: 'mamm' },
  { id: 5, name: 'Html CSS', title: 'mamm' },
];
const Frontend = () => {
  return (
    <div className="frontend">
      {/* <h1>My Latest Projects </h1> */}
      <Text
        ml={15}
        // mt={100}
        mb={30}
        font={40}
        bold
        color={colors.cyanBlue}
        text="Things I've Built . "
      />

      <ProjectsDetails myProjects={myProjects} techs={techs} />
    </div>
  );
};

export default Frontend;
