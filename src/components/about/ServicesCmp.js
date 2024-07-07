import React from 'react';
import './about.css';
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

export const ServicesCmp = () => {
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
      name: 'Full Stack Development',
      img: bullhorn,
      title:
        'Most Skilled full stack development with 3+ years of experience using React JS and Next JS, Node , Express, MongoDB with includng Rent site social media site, client dashboard and ecommerce apps etc',
    },
    {
      id: 4,
      name: 'Awesome Personality',
      img: user,
      title:
        'For me knowledge is of utmost importance today. Knowledge gives me the ability to survive and tackle different kinds of situations. It also makes me more rational and pragmatic. Thus, I tend to understand things quicker than others.',
    },
  ];

  return (
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
  );
};
