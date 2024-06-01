import React from 'react';
import './frontend.scss';
import Travel1 from '../../assets/projectsImages/travel1.png';
import Ecome1 from '../../assets/projectsImages/ecoomerce.png';
import weather from '../../assets/projectsImages/weather.png';
import food1 from '../../assets/projectsImages/food1.png';
import dummy from '../../assets/projectsImages/dummy.png';

import ProjectsDetails from './projectsDetails';

const myProjects = [
  {
    id: 1,
    img: '',
    pic: Ecome1,
    link: 'https://sephora-ecommerce-store.netlify.app/',
    name: 'Ecommerce store ',
    type: 'web app',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'React JS'],
    effort: 'Medium',
    des: 'welcome to my ecommerce web app that i use mostly javaScript and react and also advanced concept of react like redux etc',
  },
  {
    id: 2,
    // img: require('"../../assets/projectsImages/travel1.png"'),
    pic: Travel1,
    link: 'https://abr-travel.netlify.app/',
    name: 'Travel Guided',
    type: 'web site ',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'React JS'],
    effort: 'Easy',
    des: 'This is my travel guided front end webste that i use  concept of  javaScript and react to build it.',
  },

  {
    id: 2,
    img: '',
    pic: weather,
    link: 'https://abr-weather.netlify.app/',
    name: 'Live Weather',
    type: 'web development',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'React JS'],
    effort: 'Medium',
    des: 'welcome to my Foood Ordering web app that i build project by using mostly javaScript and advanced concept of react.',
  },
  {
    id: 3,
    img: '',
    pic: food1,
    link: 'https://foodparadise0123web.netlify.app/',
    name: 'Food Ordering',
    type: 'web development',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'React JS'],
    effort: 'Medium',
    des: 'welcome to my Foood Ordering web app that i build project by using mostly javaScript and advanced concept of react.',
  },

  {
    id: 4,
    img: '',
    pic: dummy,
    link: 'https://portfolio1web.netlify.app/files/services.htm/',
    name: 'Dummy portfolio',
    type: 'web development',
    Technologies: ['HTML', 'CSS', 'JavaScript'],
    effort: 'Easy',
    des: 'welcome to my Foood Ordering web app that i build project by using mostly javaScript and advanced concept of react.',
  },
];
const Frontend = () => {
  return (
    <div className="frontend">
      <h1 style={{ marginTop: 50 }}>My Latest Projects </h1>
      <ProjectsDetails myProjects={myProjects} />
    </div>
  );
};

export default Frontend;
