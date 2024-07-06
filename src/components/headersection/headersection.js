import React from 'react';
import './headersec.css';
import Container from '../UI/Card/Container';
import FlexColumn from '../UI/Card/FlexColumn';
import Button from '../UI/button/Button';
import record from '../../assets/Icons/record.png';

import pic from '../../assets/Icons/removebgAbrar (2).png';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors';
import { Text } from '../UI/Text';

// import Typical from "react-typical";

export default function Headersection() {
  return (
    <section className="headsection">
      <div className="flex mainflexCntainer">
        <FlexColumn className="secondarysec">
          <Text color={colors.cyanBlue} text="Hi, my name is" />
          <Text ml={15} mt={18} font={45} bold text="Abrar Hussain" />
          <img
            src={record}
            style={{
              width: 17,
              height: 17,
              marginTop: 20,
              // marginLeft: 6,
              marginBottom: 15,
            }}
          />
          <Text ml={10} mt={20} font={22} mb={15} text="Full Stack Developer" />
          <Text
            ml={10}
            mt={21}
            font={16}
            mb={15}
            color={colors.grey}
            text="Experienced Software Developer specializing in crafting Mobile and Web applications.
            Proficient in JavaScript , React JS , React Native and Next to deliver customized solutions. Strong problem-solving skills with quickly fixes bugs and and deliver quality product "
          />

          <div style={{ marginTop: '50px' }}>
            <Link
              to={'/about'}
              style={{
                backgroundColor: 'transparent',
                border: '2px solid red',
                marginRight: '20px',
                padding: '10px 20px',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Read More
            </Link>
            <Link
              to={'/portfolio'}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '10px 20px',
                border: '2px solid red',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Latest Work
            </Link>
          </div>
        </FlexColumn>
        <Container className="imageContainer">
          <img src={pic} alt="" />
        </Container>
      </div>
    </section>
  );
}
