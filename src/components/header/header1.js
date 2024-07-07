import React, { useEffect, useState } from 'react';
import './header.css';
import Logo1 from '../../assets/images/logo111.png';
import Container from '../UI/Card/Container';
import { IoIosMenu } from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header1 = () => {
  const [lessWidth, setlessWidth] = useState(false);
  const [sider, setsider] = useState('navBar');

  const sideHandler = () => {
    setsider('navBar activeNavBar');
  };
  const closeMenu = () => {
    setsider('navBar removeeNavBar');
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setlessWidth(true);
      } else {
        setlessWidth(false);
        // setsider(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <header>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className=" headercontainer"
        >
          <Container className="imgcontainer">
            <img src={Logo1} alt="" />
          </Container>
          {/* <div style={{ display: 'flex', justifyContent: 'space-between ' ,gap}}> */}
          <div className={sider}>
            <ul className="flex navList">
              <li className="navItem">
                <Link to="/home"> Home</Link>
              </li>
              <li className="navItem">
                <Link to="/about"> About Me</Link>
              </li>
              <li className="navItem">
                <Link to="/portfolio">Portfolio</Link>
              </li>

              <li className="navItem">
                <Link to="/projects">Services</Link>
              </li>

              {lessWidth && (
                <AiFillCloseCircle
                  size={30}
                  color="white"
                  className="toggleMenu"
                  onClick={closeMenu}
                />
              )}
            </ul>
          </div>
          {/* </div> */}
          {lessWidth && (
            <IoIosMenu
              className="menuBar"
              color="white"
              size={35}
              onClick={sideHandler}
            />
          )}
          {!lessWidth && (
            <div
              style={{
                // backgroundColor: 'brown',
                padding: 7,

                borderRadius: 5,
                cursor: 'pointer',
              }}
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <h3 style={{ color: 'white', margin: 0, padding: 0 }}>Contact</h3>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default Header1;
