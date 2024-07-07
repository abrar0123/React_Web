import React, { useEffect, useState } from 'react';
import Container from '../UI/Card/Container';
import Button from '../../components/UI/button/Button';
import { Text } from '../UI/Text';
import colors from '../../constants/colors';

const ProjectsDetails = ({ myProjects, techs }) => {
  const [first, setfirst] = useState({ id: 0, name: 'all' });
  const [newProjects, setNewProjects] = useState(myProjects);

  useEffect(() => {
    const filter1 = myProjects.filter((item) => {
      if (item.tech != undefined) {
        const ss = first.name.split(' ');
        console.log('ss', ss);
        if (ss.length > 1) {
          return item?.tech.includes(ss[1].toLowerCase());
        } else {
          return item?.tech.includes(first.name.toLowerCase());
        }
      }
    });
    console.log(first.name.toLowerCase(), 'filter1 > ', filter1);
    setNewProjects(filter1);
  }, [first]);

  console.log('first :', first);
  return (
    <>
      <div className="flex nn">
        {techs.map((item, i) => {
          return (
            <div className="smallTab" onClick={() => setfirst(item)}>
              <Text
                text={item.name}
                color={first.id === i ? colors.cyanBlue : colors.white}
              />
            </div>
          );
        })}
      </div>
      <div className="projectsDetailsContainer flex">
        {newProjects &&
          newProjects.map((item) => {
            return (
              <div className="projectsCard">
                <Container className="imgContainer">
                  <img src={item.pic} alt="pic" style={{ objectFit: 'fill' }} />
                </Container>
                <Container
                  className="spaceb flex"
                  style={{ padding: '0px 10px' }}
                >
                  <h3>{item.name}</h3>
                  <div className="box">{item.effort}</div>
                </Container>
                <Container className="flex">
                  <div
                    className="box"
                    style={{ backgroundColor: 'red', margin: '0px 10px' }}
                  >
                    {item.Technologies[0]}
                  </div>
                  <div className="box">{item.Technologies[1]}</div>
                  <div style={{ backgroundColor: 'blue' }} className="box">
                    {item.Technologies[2]}
                  </div>
                </Container>
                <div style={{ marginTop: '10px', padding: '0px 10px' }}>
                  <hr />
                </div>
                <p
                  style={{
                    padding: '0px 10px',
                    fontSize: 15,
                    color: colors.grey,
                  }}
                >
                  {item.des}
                </p>
                {/* p1 */}
                <div className="btnstyle">
                  <Button style={{ width: '100%', padding: '10px' }}>
                    <a href={item.link} target="_blank">
                      Visit Live Project
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProjectsDetails;
