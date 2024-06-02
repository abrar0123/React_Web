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
      'First, I started Android App Development using Java and Kotlin. But now I shifted my interest towards Hybrid App Development using React Native and Flutter',
    img: phone,
  },
  {
    id: 2,
    name: 'Web Development',
    img: monitor,
    title:
      'My Web Development I use technologies, React JS,Next JS CSS3, HTML5,Tailwind, Bootstrap Styled Components. I create stunning and responsive design.',
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
    name: 'Awesom Personality',
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

  return (
    <Card className="about">
      {/* <h1 style={{ marginTop: 70, fontSize: 22 }}>About Me</h1> */}

      <div className="aboutflexContainer">
        <p
          style={{
            color: 'purple',
            fontFamily: 'cursive',
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          A little information about me
        </p>
        <p
          style={{
            color: 'white',
            fontSize: 18,
            width: '60%',
            textAlign: 'justify',
            fontFamily: 'cursive',
          }}
        >
          A highly Skilled & Experienced Software developer with more than 2 +
          years of hands on industry experience in React Web and React Native
          (android + ios) development. Proficient in designing, developing &
          maintaining highly scalable Mobile and Web Apps as well as identify
          and fix bugs with a proven track record of delivering robust and
          highly scalable apps. Strong problem-solving skills coupled with a
          commitment to continuous learning and staying updated with the latest
          industry trends and best practices in software development to
          continually improve app development.
        </p>

        {/* <Container className="profileContainer">
          <img
            src={Snap1}
            style={{
              width: '85%',
              padding: 20,
              height: '90%',
              borderRadius: 10,
            }}
          />
        </Container> */}
        {/* <div className="btncontainer">
          <AboutDetails myIndex={myIndex} />
          {Index === 1 ? (
            <About_edu />
          ) : Index === 2 ? (
            <About_exp />
          ) : Index === 3 ? (
            <About_courses />
          ) : (
            <About_Contact items={items} />
          )}
        </div> */}
      </div>

      <div>
        <h3 style={{ color: 'purple', marginTop: 40, textAlign: 'center' }}>
          A Few things you need to know
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 35,
            padding: '0px 60px',
            justifyContent: 'space-between',
          }}
        >
          {data.map((item) => (
            <div style={{ display: 'flex', alignItems: 'start' }}>
              <img
                src={item.img}
                style={{
                  width: 60,
                  padding: 20,
                  height: 60,
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
                <p style={{ color: 'white', textAlign: 'justify' }}>
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
