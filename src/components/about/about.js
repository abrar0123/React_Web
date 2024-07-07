import React, { useState } from 'react';
import './about.css';
import Card from '../UI/Card/card';
import AboutDetails from './aboutDetails';
import Profile from '../../assets/images/uu.jpg';
import Snap1 from '../../assets/images/Snapchat1.jpg';
import Container from '../UI/Card/Container';

import { Text } from '../UI/Text';
import colors from '../../constants/colors';
import Button from '../UI/button/Button';

import { ScrolledList } from './ScrolledList';
import { ServicesCmp } from './ServicesCmp';
import PrimaryButton from '../UI/button/PrimaryButton';

const items = [
  { id: 1, name: '+923097914975', title: 'Contact' },
  {
    id: 2,
    name: 'https://www.linkedin.com/in/abrar-hussain-347b76239/',
    title: 'Linked In',
  },
  { id: 3, name: 'ssgibrar786@gmail.com', title: 'Email' },
  { id: 3, name: 'https://github.com/abrar0123', title: 'Github' },
];

export default function About() {
  const [Index, setIndex] = useState(1);

  const myIndex = (id) => {
    setIndex(id);
  };

  const courses = [
    { id: 1, name: 'Front End Devlopment', link: '' },
    { id: 2, name: 'Mobile  Devlopment', link: '' },
    { id: 3, name: 'JavaScript Devlopment', link: '' },
    { id: 4, name: 'Github  ', link: '' },
  ];

  const experience = [
    {
      id: 1,
      name: 'Gh & Vb Technologies ',
      doc: 'Develop multiple mobile and webs app projects with add user friendly and performant features and functionalities',
      link: '',
      exp: 'sep 2022 - march 2023',
    },
    {
      id: 2,
      name: 'Codek Technologies',
      doc: 'Develops a best real world multiple types of projects includes user facing features of international Clients. Stayed up-to-date with the latest mobile development trends and best practices to continually improve Mobile app development processes. ',
      link: '',
      exp: 'march 2023 - oct 2023',
    },
    {
      id: 3,
      name: 'Devgate Technologies',
      doc: 'Develops a best real world multiple types of projects includes user facing features of international Clients. Collaborates with cross-functional teams to design, develop, and deploy user-friendly and performant mobile applications of Android and iOS platforms.',
      link: '',
      exp: 'oct 2023 - present',
    },
    // { id: 4, name: 'Codek Technologies  ', link: '' },
  ];

  return (
    <Card className="about">
      {/* <h1 style={{ marginTop: 70, fontSize: 22 }}>About Me</h1> */}

      <div className="aboutflexContainer">
        <Text
          color={colors.cyanBlue}
          font={25}
          bold
          mb={20}
          mt={20}
          text="A little information about me"
        />
        <Text
          style={{ width: '70%' }}
          color={colors.grey}
          text="Experienced Software developer with 3+
          years of hands on industry experience as Full Stack Development. 
          Proficient in designing, developing &
          maintaining highly scalable Mobile and Web applications. Strong problem-solving skills coupled with a commitment to continuous learning and staying updated with the latest
          industry trends and best practices in software development to
          continually improve app development. "
        />
        <Text
          color={colors.cyanBlue}
          font={25}
          bold
          mb={20}
          mt={30}
          mr={150}
          text="A Few things you need to know "
        />
      </div>
      {/* <ScrolledList /> */}
      {/* <ServicesCmp /> */}
      <div className="ExpCardParent">
        {experience.map((item) => {
          return (
            <div className="ExpCard">
              <div className="dot" />
              <Text text={item.name} bold color={colors.cyanBlue10} />
              <Text text={item.exp} ml={15} font={16} />
              <Text color={colors.grey} text={item.doc} />
              <PrimaryButton>View Certificates</PrimaryButton>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
