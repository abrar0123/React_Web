import React, { useState } from 'react';
import './about.css';
import Card from '../UI/Card/card';
import AboutDetails from './aboutDetails';
import Profile from '../../assets/images/uu.jpg';
import Snap1 from '../../assets/images/Snapchat1.jpg';
import Container from '../UI/Card/Container';
import About_edu from './about_edu';
import About_exp from './about_exp';
import About_courses from './about_courses';
import About_Contact from './about_Contact';
import Web1 from '../../assets/images/web.png';
import monitor from '../../assets/Icons/monitor.png';
import phone from '../../assets/Icons/phone.png';
import bullhorn from '../../assets/Icons/bullhorn.png';
import user from '../../assets/Icons/user.png';
import { Text } from '../UI/Text';
import colors from '../../constants/colors';

import f1 from '../../assets/Icons1/js.png';
import f2 from '../../assets/Icons1/css-3.png';
import f3 from '../../assets/Icons1/react.png';
import f4 from '../../assets/Icons1/bootstrap.png';
import f5 from '../../assets/Icons1/android.png';
import f6 from '../../assets/Icons1/apple.png';

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

const data = [
  {
    id: 1,
    name: 'Mobile Development',
    title:
      'With 2+ years of extensive experience as Mobile Application Developement using React Native with includng social media apps,ai news apps and ecommerce apps etc',
    img: phone,
  },
  {
    id: 2,
    name: 'Web Development',
    img: monitor,
    title:
      'Most Skilled web application development with 3+ years of experience using React JS and Next JS with includng Rent site social media site, client dashboard and ecommerce apps etc',
  },
  {
    id: 3,
    name: 'Marketing Strategy',
    img: bullhorn,
    title:
      'I follow marketing strategies like Use of Social Media, Blogging, Understanding Search Engine Optimization, Leverage Influencers, use Linkedin the right way.',
  },
  {
    id: 4,
    name: 'Awesome Personality',
    img: user,
    title:
      'For me knowledge is of utmost importance today. Knowledge gives me the ability to survive and tackle different kinds of situations. It also makes me more rational and pragmatic. Thus, I tend to understand things quicker than others.',
  },
];
export default function About() {
  const [Index, setIndex] = useState(1);

  const myIndex = (id) => {
    setIndex(id);
  };
  const logos = [
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,

    // Add more logos as needed
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
          style={{ width: '60%' }}
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
          text="A Few things you need to know"
        />
      </div>
      {/* p11 */}
      <div className="carousel">
        <div className="carousel-track">
          {logos.map((logo, index) => (
            <div key={index} className="carousel-item">
              <img
                style={{ width: 70, height: 70 }}
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="carousel-item">
              <img
                style={{ width: 70, height: 70 }}
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 15,
            padding: '0px 60px',
            justifyContent: 'space-between',
          }}
        >
          {data.map((item) => (
            <div style={{ display: 'flex', alignItems: 'start' }}>
              <img
                src={item.img}
                style={{
                  width: 40,
                  padding: 20,
                  height: 40,
                  marginTop: 20,
                  marginRight: 15,
                  backgroundColor: colors.cyanBlue10,
                  borderRadius: 10,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  width: 400,
                  // backgroundColor: 'red',
                  flexDirection: 'column',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'justify',
                  }}
                >
                  {item.name}
                </p>

                <Text font={15} color={colors.grey} text={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
